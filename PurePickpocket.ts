const CONFIG = {
    pause: { label: "Pause", value: true },
    npc: { label: "NPC Name", value: "Master Farmer" },
    bank: { label: "Bank", value: true },
    food: { label: "Food", value: "Monkfish" },
    foodAmount: { label: "Food Amount", value: 3 },
    eatHp: { label: "Eat HP", value: 4 },
    useFood: { label: "Use Food", value: false },
    animationWait: { label: "Wait For Animation", value: true }
}
config.setConfig(CONFIG)

enum State {
    STUCK,
    PAUSED,
    BANKING,
    ANIMATING,
    DEPOSITING,
    ENABLE_RUN,
    THIEVING,
    HEALING,
    DROPPING,
    WITHDRAWING,
    POUCH_OPENING,
    OPENING_DOOR,
}

let state: State
let npc: string
let startTick = client.getTickCount()

function loop() {
    startPaused()
    npc = config.getString("npc")
    state = getState()
    switch (state) {
        case State.ANIMATING:
        case State.PAUSED:
        case State.STUCK:
            return
        case State.BANKING:
            return api.objects.interactWithAction("Bank", true)
        case State.DEPOSITING:
            return api.bank.depositAll()
        case State.ENABLE_RUN:
            return api.player.enableRun()
        case State.THIEVING:
            return api.npcs.interactWith(npc, false, true, true, "Pickpocket")
        case State.HEALING:
            return api.inventory.useItem(config.getString("food"), "Eat")
        case State.DROPPING:
            return api.inventory.dropAll()
        case State.WITHDRAWING:
            return api.bank.withdrawItem(config.getString("food"), config.getNumber("foodAmount"))
        case State.POUCH_OPENING:
            return api.inventory.useItem("Coin pouch", "Open-all")
        case State.OPENING_DOOR:
            return api.objects.interactWithAction("Open", true)
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }
    if (api.player.isRunOff() && api.player.runEnergy() >= 20) {
        return State.ENABLE_RUN
    }
    if (api.player.isAnimating() || api.player.isMoving()) {
        if (state == State.THIEVING && !config.getBoolean("animationWait")) {
            return State.THIEVING
        }
        return State.ANIMATING
    }
    if (api.objects.distanceToNearestAction("Open") <= 1) {
        return State.OPENING_DOOR
    }
    if (api.bank.isOpen()) {
        // This is a bit jank, consider making cleaner
        if (state != State.WITHDRAWING && !api.inventory.isEmpty()) {
            return State.DEPOSITING
        }
        if (!hasFood()) {
            return State.WITHDRAWING
        }
    }
    if (shouldBank()) {
        if (api.inventory.hasItem("Coin pouch")) {
            return State.POUCH_OPENING
        }
        return State.BANKING
    }
    if (api.inventory.getItemAmount("Coin pouch", true) == 28) {
        return State.POUCH_OPENING
    }
    if (api.inventory.isFull()) {
        return State.DROPPING
    }
    if (shouldEat()) {
        if (hasFood()) {
            return State.HEALING
        }
        if (hasCoinPouch()) {
            return State.POUCH_OPENING
        }
        if (config.getBoolean("bank")) {
            return State.BANKING
        }
    }
    if (isNpcPresent()) {
        return State.THIEVING
    }
    return State.STUCK
}

function isNpcPresent() {
    return api.npcs.get(npc).isPresent()
}

function hasFood() {
    return !config.getBoolean("useFood") || api.inventory.getItemAmount(config.getString("food"), false) > 0
}

function hasCoinPouch() {
    return api.inventory.hasItem("Coin pouch")
}

function shouldEat() {
    return config.getBoolean("useFood") && api.player.hp() <= config.getNumber("eatHp")
}

function shouldBank() {
    // Add logic to determine if banking is needed
    return config.getBoolean("bank") && api.inventory.isFull()
}

function startPaused() {
    if (client.getTickCount() - startTick <= 2) {
        config.setConfigItem("pause", true) // Will not update config UI in the editor
    }
}

function render() {
    if (state) {
        ui.addText(State[state])
    }
}
