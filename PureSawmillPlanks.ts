const CONFIG = {
    pause: { label: "Pause", value: true }, // Allow user to select config before the script start running
    sawmill: {
        label: "Sawmill", value: "Guild",
        options: "Guild"
    },
    plank: {
        label: "Plank", value: "Plank",
        options: ["Plank", "Oak", "Teak", "Mahogany"]
    },
}
config.setConfig(CONFIG) // Set the default config

const LOG_MENU = 17694727
const logMap = {
    Plank: { log: "Logs", option: "Wood - 100gp" },
    Oak: { log: "Oak logs", option: "Oak - 250gp" },
    Teak: { log: "Teak logs", option: "Teak - 500gp" },
    Mahogany: { log: "Mahogany logs", option: "Mahogany - 1,500gp" }
}

enum State {
    STUCK,
    PAUSED,
    MOVING,
    ANIMATING,
    BANKING,
    WITHDRAWING,
    DEPOSITING,
    WALKING_OPERATOR,
    TALKING_OPERATOR,
    MAKE_PLANKS,
}

let startTick = client.getTickCount()
let state: State;

function loop() {
    startPaused()
    enableRun()
    state = getState()
    handleState()
}

function handleState() {
    switch (state) {
        case State.PAUSED:
        case State.ANIMATING:
        case State.MOVING:
            return
        case State.BANKING:
            return api.bank.useNearest()
        case State.DEPOSITING:
            return api.bank.depositAllNameContains("lank")
        case State.WITHDRAWING:
            return withdrawItems()
        case State.WALKING_OPERATOR:
            return walkToOperator()
        case State.TALKING_OPERATOR:
            return talkToOperator()
        case State.MAKE_PLANKS:
            return makePlanks()
    }
}

function getState() {
    if (isPaused()) {
        return State.PAUSED
    }
    if (api.player.isAnimating()) {
        return State.ANIMATING
    }
    if (api.player.isMoving()) {
        return State.MOVING
    }
    if (!hasCoins() || !hasLogs()) {
        if (api.bank.isOpen()) {
            if (hasPlanks()) {
                return State.DEPOSITING
            }
            return State.WITHDRAWING
        }
        return State.BANKING
    }
    if (isPlankMenuOpen()) {
        return State.MAKE_PLANKS
    }
    if (isSawmillOperatorPresent()) {
        return State.TALKING_OPERATOR
    }
    return State.WALKING_OPERATOR
    // return State.STUCK
}

function getLog() {
    return logMap[config.getString("plank")]
}

function getLogName() {
    return getLog().log
}

function isPaused() {
    return config.getBoolean("pause")
}

function isPlankMenuOpen() {
    return api.widgets.isVisible(LOG_MENU)
}

function isSawmillOperatorPresent() {
    return api.npcs.get("Sawmill operator").isPresent()
}

function hasCoins() {
    return api.inventory.hasItem("Coins")
}

function hasLogs() {
    return api.inventory.hasItem(getLogName())
}

function hasPlanks() {
    return api.inventory.hasItemNameContains("lank")
}

function enableRun() {
    return api.player.enableRun(20)
}

function withdrawItems() {
    if (!hasCoins()) {
        api.bank.withdrawItem("Coins", 999999999)
    }
    if (!hasLogs()) {
        api.bank.withdrawItem(getLogName(), 27)
    }
}

function walkToOperator() {
    api.pathing.webwalkTo(1625, 3500, 0, 2)
}

function talkToOperator() {
    return api.npcs.interactWithNearest("Sawmill operator", "Buy-plank")
}

function makePlanks() {
    return api.widgets.interactWithMakeAll(getLogName(), getLog().option)
    // return api.widgets.interactWith(LOG_MENU, getLog().option)
}

//----------------------------------------------

function startPaused() {
    if (client.getTickCount() - startTick <= 3) {
        config.setConfigItem("pause", true)
    }
}

function render() {
    if (state != undefined) {
        ui.addText(State[state])
    }
}
