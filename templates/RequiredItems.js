const CONFIG = {
    // Default start paused to allow configuration
    pause: { label: "Pause", value: true },
    // Text (string)
    text: { label: "Text", value: "Text" },
    // Checkbox (boolean)
    checkbox: { label: "Checkbox", value: true },
    // Dropdown menu
    dropdown: {
        label: "Dropdown", value: "Shark",
        options: ["Option 1", "Option 2", "Option 3",]
    },
    // Number
    num: { label: "Number", value: 0 },
}
config.setConfig(CONFIG)
/**
 * Access number: config.getNumber("name")
 * Access text: config.getString("name")
 * Access boolean: config.getBoolean("name")
 */


enum State {
    STUCK,
    STARTING,
    PAUSED,
    ANIMATING,
    MOVING,
    BANKING,
    WITHDRAWING,
    CLOSING_BANK,
    // Add more states here
}

let state = State.STARTING
const REQUIRED_ITEMS = ["Staff of fire", "Wooden shield"]

function loop() {
    state = getState()
    switch (state) {
        case State.PAUSED:
        case State.MOVING:
        case State.ANIMATING:
            /**
             * Do nothing if:
             * - Script is paused
             * - Player is moving
             * - Player is animating
             */
            return
        case State.BANKING:
            // Use nearest bank, and webwalk if needed
            return api.bank.useNearest(true)
        case State.WITHDRAWING:
            return withdrawItems()
        case State.CLOSING_BANK:
            return api.bank.close()
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        log.info("Paused")
        return State.PAUSED
    }

    if (api.player.isMoving()) {
        return State.MOVING
    }

    if (api.player.isAnimating()) {const CONFIG = {
    // Default start paused to allow configuration
    pause: { label: "Pause", value: true },
    // Text (string)
    text: { label: "Text", value: "Text" },
    // Checkbox (boolean)
    checkbox: { label: "Checkbox", value: true },
    // Dropdown menu
    dropdown: {
        label: "Dropdown", value: "Shark",
        options: ["Option 1", "Option 2", "Option 3",]
    },
    // Number
    num: { label: "Number", value: 0 },
}
config.setConfig(CONFIG)
/**
 * Access number: config.getNumber("name")
 * Access text: config.getString("name")
 * Access boolean: config.getBoolean("name")
 */


enum State {
    STUCK,
    STARTING,
    PAUSED,
    ANIMATING,
    MOVING,
    BANKING,
    WITHDRAWING,
    CLOSING_BANK,
    // Add more states here
}

let state = State.STARTING
const REQUIRED_ITEMS = ["Staff of fire", "Wooden shield"]

function loop() {
    state = getState()
    switch (state) {
        case State.PAUSED:
        case State.MOVING:
        case State.ANIMATING:
            /**
             * Do nothing if:
             * - Script is paused
             * - Player is moving
             * - Player is animating
             */
            return
        case State.BANKING:
            // Use nearest bank, and webwalk if needed
            return api.bank.useNearest(true)
        case State.WITHDRAWING:
            return withdrawItems()
        case State.CLOSING_BANK:
            return api.bank.close()
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        log.info("Paused")
        return State.PAUSED
    }

    if (api.player.isMoving()) {
        return State.MOVING
    }

    if (api.player.isAnimating()) {
        return State.ANIMATING
    }

    if (!hasItems()) {
        if (api.bank.isOpen()) {
            return State.WITHDRAWING
        }
        return State.BANKING
    }

    if (api.bank.isOpen()) {
        return State.CLOSING_BANK
    }

    return State.STUCK
}

function getMissingItems() {
    return REQUIRED_ITEMS.filter(item => !api.inventory.hasItem(item))
}

function hasItems() {
    return getMissingItems().length == 0
}

function withdrawItems() {
    REQUIRED_ITEMS.forEach(item => api.bank.withdrawItem(item))
}

function render() {
    if (state != undefined) {
        ui.addText("State: " + State[state])
    }
}
        return State.ANIMATING
    }

    if (!hasItems()) {
        if (api.bank.isOpen()) {
            return State.WITHDRAWING
        }
        return State.BANKING
    }

    if (api.bank.isOpen()) {
        return State.CLOSING_BANK
    }

    return State.STUCK
}

function getMissingItems() {
    return REQUIRED_ITEMS.filter(item => !api.inventory.hasItem(item))
}

function hasItems() {
    return getMissingItems().length == 0
}

function withdrawItems() {
    REQUIRED_ITEMS.forEach(item => api.bank.withdrawItem(item))
}

function render() {
    if (state != undefined) {
        ui.addText("State: " + State[state])
    }
}
