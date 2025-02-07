const CONFIG = {
    // Default start paused to allow configuration
    pause: { label: "Pause", value: true }
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
    EXAMPLE,
    // Add more states here
}

let state = State.STARTING

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
        case State.EXAMPLE:
            // Handle example state
            // ex: return api.inventory.dropAll()
            return
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }

    if (api.player.isMoving()) {
        return State.MOVING
    }

    if (api.player.isAnimating()) {
        return State.ANIMATING
    }

    if (true) {
        // Replace true with what need to be checked
        return State.EXAMPLE
    }

    return State.STUCK
}

function render() {
    ui.addText("State: " + State[state])
}
