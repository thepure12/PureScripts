/**
 * PureSquirkin
 * Author: thepure12
 */
const CONFIG = {
    garden: {
        label: "Garden", value: "Summer",
        options: ["Summer"]
    },
    staminas: {
        label: "Staminas", value: 3,
        options: [0, 1, 2, 3]
    },
    herbs: {
        label: "Pick Herbs", value: false
    },
    timer: {
        label: "Log Timer", value: false
    },
    state: {
        label: "Log State", value: false
    }
}
config.setConfig(CONFIG)

// Constants
const HOMES = [
    [2907, 5488, 0],
    [2907, 5490, 0],
    [2910, 5487, 0],
    [2912, 5485, 0],
    [2921, 5486, 0],
    [2921, 5495, 0]
]
const CYCLE_LENGTHS = [10, 10, 12, 20, 12, 12]
const tickBasis = [-1, -1, -1, -1, -1, -1]
const VALID_TICKS_GATE_START = [
    [false, false, false, false, false, false, true, false, false, false],
    [true, true, true, false, false, false, false, true, false, false],
    [false, false, true, true, true, true, false, false, false, false, true, true],
    [true, true, true, false, false, false, true, true, true, true, true, true, false, false, false, false, false, true, true, true],
    [true, false, true, false, false, false, true, false, false, false, false, true],
    [false, false, false, true, false, false, true, true, true, true, true, false]
]
const State = {
    STUCK: -1,
    ANIMATING: 1,
    OPENING_GATE: 2,
    PICKING: 3,
    JUICING: 4,
    REGENNING_RUN: 5,
    DRINKING_STAMINA: 6,
    EXITING_GARDEN: 7,
    WAITING: 8,
    OPENING_DOOR: 9,
    WALKING_OSMAN: 10,
    TALKING_OSMAN: 11,
    BANKING: 12,
    WITHDRAWING: 13,
    DEPOSITING: 14,
    WALKING_GARDEN: 15,
    TELEPORTING: 16,
    WALKING_WINDOW: 17,
    ENABLING_RUN: 18,
    SHANTY_BANKIN: 19,
    PICKING_HERBS: 20,
    WEBWALKING_DOOR: 21
}
const STATE_MAP = Object.keys(State).reduce((mapped, key) => {
    mapped[State[key]] = key
    return mapped
}, {})
const MIN_RUN = 20
let state: number;
let ticksUntilStart = -1
let timeout = 0
let herbs = false

function onGameTick(event: rl.events.GameTick) {
    for (const npc of client.getNpcs()) {
        if (isSummerElemental(npc)) {
            updatePosition(npc, client.getTickCount())
        }
    }
    updateContdownTimer(client.getTickCount())
    herbs = config.getBoolean("herbs")
    state = getState()
    if (config.getBoolean("timer")) {
        log.info("Timer: " + ticksUntilStart)
    }
    if (config.getBoolean("state")) {
        log.info("State: " + STATE_MAP[state])
    }
    // log.info("State: " + state)
    switch (state) {
        case State.ANIMATING:
        case State.WAITING:
        case State.STUCK:
            return
        case State.REGENNING_RUN:
            break
        case State.OPENING_GATE:
            if (timeout > 0) {
                break
            }
            const gate = getGate()
            if (gate.isPresent()) {
                api.objects.interactWith(gate.get(), "Open")
            }
            break
        case State.PICKING:
            api.objects.interactWithNearestAction("Pick-Fruit")
            timeout = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
            break
        case State.PICKING_HERBS:
            const herbsOptional = api.objects.getNearestToPoint("Herbs", 2923, 5483, 0)
            if (herbsOptional.isPresent()) {
                api.objects.interactWith(herbsOptional.get(), "Pick")
            }
            timeout = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
            break
        case State.JUICING:
            api.inventory.useItemOnItem(233, 10845)
            break
        case State.DRINKING_STAMINA:
            api.inventory.useItem("Stamina", "Drink")
            break
        case State.EXITING_GARDEN:
            api.objects.interactWithNearestAction("Drink-from")
            break
        case State.OPENING_DOOR:
            api.objects.interactWithNearestAction("Open")
            break
        case State.WALKING_OSMAN:
            api.pathing.walkToward(3292, 3179, 0)
            break
        case State.TALKING_OSMAN:
            api.inventory.useItemOnNpc("Summer sq'irkjuice", "Osman")
            break
        case State.BANKING:
            if (herbs) {
                const bankOptional = api.objects.getNearest("Bank chest", false, true)
                if (bankOptional.isPresent()) {
                    api.objects.interactWith(bankOptional.get(), "Use")
                }
            } else {
                api.bank.useNearestBank()
            }
            break
        case State.DEPOSITING:
            if (herbs) {
                api.bank.depositAll()
            } else {
                api.bank.depositAll("Vial")
                api.bank.depositAll("Stamina potion(1)")
                api.bank.depositAll("Stamina potion(2)")
                api.bank.depositAll("Stamina potion(3)")
                api.bank.depositAll("Stamina potion(4)")
            }
            break
        case State.WITHDRAWING:
            const staminaAmount = config.getNumber("staminas")
            if (staminaAmount) {
                api.bank.withdrawItem("Stamina potion(4)", staminaAmount)
            }
            if (!herbs) {
                api.bank.withdrawItem("Beer glass", 22)
            }
            break
        case State.WALKING_GARDEN:
            // log.info("Walking to garden")
            api.pathing.walkTo(3318, 3144, 0)
            break
        case State.WALKING_WINDOW:
            // log.info("Walking to window")
            api.pathing.walkToward(3295, 3156, 0)
            break
        case State.WEBWALKING_DOOR:
            api.pathing.webwalkTo(api.location.worldPoint(3321, 3142))
            break
        case State.TELEPORTING:
            api.npcs.interactWith("Apprentice", "Teleport")
            break
        case State.ENABLING_RUN:
            api.player.enableRun()
            break

    }
    timeout--
}

/**
 * Get the current state
 */
function getState() {
    if (api.player.isAnimating() || api.player.isMoving()) {
        if (!inStartPosition()) {
            return State.ANIMATING
        }
    }
    if (herbs) {
        const herbState = getHerbState()
        if (herbState) {
            return herbState
        }
    } else {
        const juiceState = getJuiceState()
        if (juiceState) {
            return juiceState
        }
    }
    const doorDistance = api.objects.distanceToNearest("Door")
    if (api.objects.distanceToAction("Open", true) <= 5 && doorDistance >= 0) {
        return State.OPENING_DOOR
    }
    if (api.npcs.getNearest("Apprentice", false, true).isPresent()) {
        return State.TELEPORTING
    }
    if (api.inventory.getItemAmount(10845) > 1) {
        return State.JUICING
    }
    if (!api.player.isStaminaActive()) {
        if (config.getNumber("staminas") > 0) {
            if (api.player.runEnergy() < 50) {
                if (api.inventory.hasItem("Stamina")) {
                    return State.DRINKING_STAMINA
                }
            }
        }
    }
    if (api.player.runEnergy() <= 20) {
        return State.REGENNING_RUN
    }
    if (api.player.isRunOff()) {
        return State.ENABLING_RUN
    }
    if (!inStartPosition()) {
        return State.OPENING_GATE
    }
    if (ticksUntilStart == 0) {
        return herbs ? State.PICKING_HERBS : State.PICKING
    }
    return State.WAITING
}

function getJuiceState() {
    if (!api.inventory.hasItem("Beer glass")) {
        if (api.inventory.hasItem("sq'irkjuice")) {
            if (api.objects.distanceToAction("Open", true) <= 5) {
                return State.OPENING_DOOR
            }
            if (api.npcs.distanceTo("Osman", false, true, false) <= 10) {
                return State.TALKING_OSMAN
            }
            if (api.npcs.getNearest("Apprentice", false, true).isPresent()) {
                return State.WALKING_OSMAN
            }
            if (api.objects.getNearestWithAction("Drink-from")) {
                return State.EXITING_GARDEN
            }
            return State.STUCK
        }
        if (api.bank.isOpen()) {
            if (api.inventory.hasItem("Vial") || api.inventory.hasItem("Stamina")) {
                return State.DEPOSITING
            }
            return State.WITHDRAWING
        }
        return State.BANKING
    }
    const bankDistance = api.objects.distanceTo("Bank booth", false, true, true)
    if (bankDistance <= 5 && bankDistance >= 0) {
        return State.WALKING_WINDOW
    }
    const windowDistance = api.objects.distanceTo("Big window", false, true, true)
    if (windowDistance <= 15 && bankDistance >= 0) {
        return State.WALKING_GARDEN
    }
    return null
}

function getHerbState() {
    if (api.bank.isOpen()) {
        if (api.inventory.hasItem("leaf")) {
            return State.DEPOSITING
        }
        if (api.inventory.getItemAmount("Stamina potion(4)", false) >= config.getNumber("staminas")) {
            return State.WEBWALKING_DOOR
        }
        return State.WITHDRAWING
    }
    if (api.inventory.emptySlots() < 2) {
        if (api.objects.distanceToAction("Open", true) <= 5) {
            return State.OPENING_DOOR
        }
        if (api.npcs.getNearest("Apprentice", false, true).isPresent()) {
            return State.BANKING
        }
        if (api.objects.getNearestWithAction("Drink-from")) {
            return State.EXITING_GARDEN
        }
    }
    return null
}

function inStartPosition() {
    const loc = client.getLocalPlayer().getWorldLocation()
    return loc.getX() == 2910 && loc.getY() == 5481 && loc.getPlane() == 0
}

function getGate() {
    return api.objects.getNearestToPoint("Gate", 2910, 5481, 0)
}

function getValidTicksForElemental(elementalIndex: number) {
    return VALID_TICKS_GATE_START[elementalIndex]
}

function isSummerElemental(npc: rl.NPC) {
    return npc.getId() >= 1801 && npc.getId() <= 1806
}

function updatePosition(npc: rl.NPC, tc: number) {
    if (!isSummerElemental(npc)) {
        return
    }
    const loc = npc.getWorldLocation()
    const eid = npc.getId() - 1801
    const home = HOMES[eid]
    if (loc.getX() == home[0] && loc.getY() == home[1] && loc.getPlane() == home[2]) {
        tickBasis[eid] = tc
    }
}

function updateContdownTimer(tc: number) {
    ticksUntilStart = moduloPositive(getBestStartPointForLowestTotalParityScore() - tc, 60)
}

function getBestStartPointForLowestTotalParityScore() {
    let smallestParity = 1000000
    let smallestIndex = -1
    for (let i = 0; i < 60; i++) {
        const paritySum = getParitySum(i)
        if (paritySum < smallestParity) {
            smallestParity = paritySum
            smallestIndex = i
        }
    }
    return smallestIndex
}

function getParitySum(startCycle: number) {
    let paritySum = 0
    for (let elementalIndex = 0; elementalIndex < 6; elementalIndex++) {
        paritySum += getParityForStartCycle(startCycle, elementalIndex)
    }
    return paritySum
}

function getParityForStartCycle(startCycle: number, elementalIndex: number) {
    if (tickBasis[elementalIndex] == -1) {
        return -1
    }
    const basis = tickBasis[elementalIndex]
    const validTicksForElemental = getValidTicksForElemental(elementalIndex)
    for (let parity = 0; parity < validTicksForElemental.length; parity++) {
        const cycleLength = CYCLE_LENGTHS[elementalIndex]
        const indexWithParity = moduloPositive(startCycle - basis - parity, cycleLength)
        if (validTicksForElemental[indexWithParity]) {
            return parity
        }
    }
    return -1
}

function moduloPositive(base: number, mod: number) {
    return ((base % mod) + mod) % mod
}
