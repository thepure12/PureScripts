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
    CHOPPING,
    // Add more states here
}

let state = State.STARTING
const REQUIRED_ITEMS = ["Rune axe"]

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
        case State.CHOPPING:
            return api.objects.interactWithNearest("Willow tree", "Chop down")
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

    if (shouldChopWillow()) {
        return State.CHOPPING
    }

    return State.STUCK
}

function getMissingItems() {
    // Alternate code:
    // let missingItems = []
    // for (let item of REQUIRED_ITEMS) {
    //     if (!api.inventory.hasItem(item)) {
    //         missingItems.push(item)
    //     }
    // }
    // return missingItems
    return REQUIRED_ITEMS.filter(item => !api.inventory.hasItem(item))
}

function hasItems() {
    return getMissingItems().length == 0
}

function shouldChopWillow() {
    return !api.inventory.isFull() && api.objects.get("Willow tree").isPresent()
}

function withdrawItems() {
    // Alternate code:
    // for (let item of getMissingItems()) {
    //     api.bank.withdrawItem(item)
    // }
    getMissingItems().forEach(item => api.bank.withdrawItem(item))
}

function render() {
    if (state != undefined) {
        ui.addText("State: " + State[state])
    }
}
