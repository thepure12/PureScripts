const CONFIG = {
    npc: { label: "NPC Name", value: "Master Farmer" },
    bank: { label: "Bank", value: true },
    food: { label: "Food", value: "Monkfish" },
    foodAmount: { label: "Food Amount", value: 3 },
    eatHp: { label: "Eat HP", value: 4 },
    useFood: { label: "Use Food", value: false },
    animation: { label: "Wait For Animation", value: true },
    state: { label: "Log State", value: false },
    pause: { label: "Pause", value: true }
}
config.setConfig(CONFIG)

const State = {
    STUCK: -1,
    PAUSED: 1,
    BANKING: 2,
    ANIMATING: 3,
    DEPOSITING: 4,
    ENABLE_RUN: 5,
    THIEVING: 6,
    HEALING: 7,
    DROPPING: 8,
    WITHDRAWING: 9,
    POUCH_OPENING: 10,
    OPENING_DOOR: 11,
}
const STATE_MAP = Object.keys(State).reduce((mapped, key) => {
    mapped[State[key]] = key
    return mapped
}, {})
let state: number;

function onGameTick(event: rl.events.GameTick) {
    state = getState()
    if (config.getBoolean("state")) {
        log.info(STATE_MAP[state])
    }
    switch (state) {
        case State.ANIMATING:
        case State.PAUSED:
        case State.STUCK:
            return
        case State.BANKING:
            api.objects.interactWithAction("Bank", true)
            break
        case State.DEPOSITING:
            api.bank.depositAll()
            break
        case State.ENABLE_RUN:
            api.player.enableRun()
            break
        case State.THIEVING:
            api.npcs.interactWith(config.getString("npc"), false, true, true, "Pickpocket")
            break
        case State.HEALING:
            if (config.getBoolean("useFood")) {
                api.inventory.useItem(config.getString("food"), "Eat")
            }
            break
        case State.DROPPING:
            api.inventory.dropAll()
            break
        case State.WITHDRAWING:
            api.bank.withdrawItem(config.getString("food"), config.getNumber("foodAmount"))
            break
        case State.POUCH_OPENING:
            api.inventory.useItem("Coin pouch", "Open-all")
            break
        case State.OPENING_DOOR:
            api.objects.interactWithAction("Open", true)
            break
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }
    if (api.player.isRunOff()) {
        if (api.player.runEnergy() >= 20) {
            return State.ENABLE_RUN
        }
    }
    if (api.player.isAnimating() || api.player.isMoving()) {
        if (state == State.THIEVING && !config.getBoolean("animation")) {
            return State.THIEVING
        }
        return State.ANIMATING
    }
    if (api.objects.distanceToNearestAction("Open") <= 1) {
        return State.OPENING_DOOR
    }
    if (api.bank.isOpen()) {
        if (state != State.WITHDRAWING && !api.inventory.isEmpty()) {
            return State.DEPOSITING
        }
        if (!hasNeededFood()) {
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
    if (api.player.hp() <= 4 || (config.getBoolean("useFood") && api.player.hp() <= config.getNumber("eatHp"))) {
        if (!hasNeededFood()) {
            if (api.inventory.hasItem("Coin pouch")) {
                return State.POUCH_OPENING
            }
            return State.BANKING
        }
        return State.HEALING
    }
    if (api.npcs.get("Master Farmer")) {
        return State.THIEVING
    }
    return State.STUCK
}

function shouldBank() {
    // Add logic to determine if banking is needed
    return config.getBoolean("bank") && api.inventory.isFull()
}

function hasNeededFood() {
    return !config.getBoolean("useFood") || api.inventory.getItemAmount(config.getString("food"), false) > 0
}
