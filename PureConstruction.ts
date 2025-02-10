const CONFIG = {
    mode: {
        label: "Mode", value: "Wooden chair",
        options: ["Wooden chair", "Wooden bookcase", "Oak dining table", "Oak larder"]
    },
    restock: {
        label: "Restock Method", value: "Phials",
        options: ["Phials"]
    },
    run: { label: "Run Threshold", value: 50 }, // Number picker
    logState: { label: "Log State", value: false }, // Allow user to log the current script state
    pause: { label: "Pause", value: true } // Allow user to select config before the script start running
}
config.setConfig(CONFIG) // Set the default config

const State = { // Various states of the script, used to determine the action for each tick
    STUCK: -1,
    PAUSED: 0,
    ANIMATING: 1,
    MOVING: 2,
    ENABLE_RUN: 3,
    BUILDING: 4,
    ENTERING_HOUSE: 5,
    REMOVING: 6,
    SELECTING: 7,
    CONFIRMING: 8,
    RESTOCKING: 9,
    UNNOTING: 10,
    EXITING_HOUSE: 11,
}
const STATE_MAP = Object.keys(State).reduce((mapped, key) => { // State map for logging purposes
    mapped[State[key]] = key
    return mapped
}, {})
const UNOTE_WIDGET = { id: 14352385, child: 3 }
const CONFIRM_WIDGET = { id: 14352385, child: 1 }
const FURNITURE = {
    "Wooden chair": {
        items: [
            { id: 960, amount: 2 }
        ],
        space: "Chair space",
        gameObject: "Chair",
        widget: { id: 30015490, child: 1 },
        unnote: 961 // Plank
    },
    "Wooden bookcase": {
        items: [
            { id: 960, amount: 4 }
        ],
        space: "Bookcase space",
        gameObject: "Bookcase",
        widget: { id: 30015490, child: 1 },
        unnote: 961 // Plank
    },
    "Oak dining table": {
        items: [
            { id: 8778, amount: 4 }
        ],
        space: "Table space",
        gameObject: "Table",
        widget: { id: 30015490, child: 2 },
        unnote: 8779 // Plank
    },
    "Oak larder": {
        items: [
            { id: 8778, amount: 8 }
        ],
        space: "Larder space",
        gameObject: "Larder",
        widget: { id: 30015490, child: 2 },
        unnote: 8779 // Plank
    }
}
let state: number // Current state of the script
let mode: string
let furniture = FURNITURE["Wooden chair"]

function onGameTick(event: rl.events.GameTick) {
    // What should happen each game tick
    state = getState() // Get the current state
    mode = config.getString("mode")
    furniture = FURNITURE[mode];
    if (config.getBoolean("logState")) {
        log.info(STATE_MAP[state]) // Log the current state
    }
    switch (state) {
        case State.PAUSED:
        case State.ANIMATING:
        case State.MOVING:
        case State.STUCK:
            return
        case State.ENABLE_RUN:
            api.player.enableRun()
            break
        case State.CONFIRMING:
            api.widgets.interactWith(CONFIRM_WIDGET.id, CONFIRM_WIDGET.child)
            break
        case State.UNNOTING:
            api.widgets.interactWith(UNOTE_WIDGET.id, UNOTE_WIDGET.child)
            break
        case State.EXITING_HOUSE:
            api.objects.interactWithNearestAction("Enter");
            break
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }
    if (api.player.isRunOff() && api.player.runEnergy() >= config.getNumber("run")) {
        return State.ENABLE_RUN
    }
    if (api.player.isAnimating()) {
        return State.ANIMATING
    }
    if (api.player.isMoving()) {
        return State.MOVING
    }
    if (api.widgets.get("Select an option", true, true).isPresent()) {
        return State.UNNOTING
    }
    if (api.widgets.get("Really remove it", true, true).isPresent()) {
        return State.CONFIRMING
    }
    if (api.widgets.interactWith(furniture.widget.id, furniture.widget.child)) {
        return State.SELECTING
    }
    if (hasItems()) {
        if (api.objects.interactWithNearestAction("Build mode")) {
            return State.ENTERING_HOUSE
        } else {
            if (api.objects.interactWithNearest(furniture.gameObject, "Remove")) {
                return State.REMOVING
            }
            if (api.objects.interactWithNearest(furniture.space, "Build")) {
                return State.BUILDING;
            }
        }
    }
    if (config.getString("restock") == "Phials") {
        if (api.inventory.useItemOnNpc(furniture.unnote, "Phials")) {
            return State.RESTOCKING
        }
        return State.EXITING_HOUSE
    }
    // Handle more states
    return State.STUCK
}

function hasItems() {
    return furniture.items.reduce((acc, next) => api.inventory.getItemAmount(next.id) >= next.amount && acc, true)
}

function selectBuildOption() {

}
