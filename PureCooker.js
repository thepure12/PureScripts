const CONFIG = {
    food: { label: "Food to Cook", value: "Raw shrimps" },
    heat: {
        label: "Heat Source", value: "Range",
        options: ["Range", "Fire"]
    },
    tickCook: {
        label: "Tick Cook", value: false
    },
    run: { label: "Enable Run At", value: 50 },
    logState: { label: "Log State", value: false },
    pause: { label: "Pause", value: true }
}
config.setConfig(CONFIG)

const State = {
    STUCK: -1,
    BANKING: 1,
    TRAVELING: 2,
    ANIMATING: 3,
    PAUSED: 4,
    DEPOSITING: 5,
    ENABLE_RUN: 6,
    COOKING: 7,
    WITHDRAWING: 8,
    COOKING_ALL: 9,
    DROPPING: 10,
    PICKING_UP: 11,
}
const STATE_MAP = Object.keys(State).reduce((mapped, key) => {
    mapped[State[key]] = key
    return mapped
}, {})
const COOK_ALL_ID = 17694734;
let state: number;
let food = ""
let heat = ""
let tickCook = false

function onGameTick(event: rl.events.GameTick) {
    state = getState()
    food = config.getString("food")
    heat = config.getString("heat")
    tickCook = config.getBoolean("tickCook")
    logState()
    switch (state) {
        case State.ANIMATING:
        case State.PAUSED:
        case State.STUCK:
            return
        case State.BANKING:
            api.bank.useNearestBank();
            break
        case State.DEPOSITING:
            api.bank.depositAll()
            break
        case State.COOKING:
            api.inventory.useItemOnNearestObject(food, heat)
            break
        case State.COOKING_ALL:
            const amount = api.inventory.getItemAmount(food, false)
            api.widgets.interactWith(COOK_ALL_ID, amount)
            break
        case State.ENABLE_RUN:
            api.player.enableRun()
            break
        case State.WITHDRAWING:
            if (!api.bank.withdrawItem(food, 28)) {
                log.info("Out of " + food)
            }
            break
        case State.DROPPING:
            api.inventory.dropAll(food)
            break;
        case State.PICKING_UP:
            api.groundItems.lootItem(food)
            break
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }
    if (api.player.isRunOff()) {
        if (api.player.runEnergy() >= config.getNumber("run")) {
            return State.ENABLE_RUN
        }
    }
    if (tickCook) {
        if (api.inventory.getItemAmount(food) == 1) {
            return State.COOKING
        }
        if (api.groundItems.get(food, false, true, true).filter(
            item => item.getLocation().distanceTo(api.player.getLocation()) < 1
        ).isPresent()) {
            return State.PICKING_UP
        }
    }
    if (api.player.isAnimating() || api.player.isMoving()) {
        return State.ANIMATING
    }
    if (shouldBank()) {
        if (api.bank.isOpen()) {
            if (api.inventory.isFull()) {
                return State.DEPOSITING
            }
            return State.WITHDRAWING
        }
        return State.BANKING
    }
    if (hasItems()) {
        if (api.widgets.isVisible(17694734)) {
            if (tickCook && api.inventory.getItemAmount(food) > 1) {
                return State.DROPPING
            }
            return State.COOKING_ALL
        }
        return State.COOKING
    }
    return State.STUCK
}

function shouldBank() {
    return !hasItems()
}

function hasItems() {
    return api.inventory.hasItem(config.getString("food"))
}

function logState() {
    if (config.getBoolean("logState"))
        log.info(STATE_MAP[state])
}
