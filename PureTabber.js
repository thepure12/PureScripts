const CONFIG = {
    tab: {
        label: "Tab", value: "Varrock",
        options: ["Varrock"]
    },
    restock: {
        label: "Restock Method", value: "Phials",
        options: ["Phials"]
    },
    // run: { label: "Run Threshold", value: 20 },
    // logState: { label: "Log State", value: false }, // Allow user to log the current script state
    pause: { label: "Pause", value: true } // Allow user to select config before the script start running
}
config.setConfig(CONFIG) // Set the default config

const State = { // Various states of the script, used to determine the action for each tick
    STUCK: -1,
    ANIMATING: 1,
    PAUSED: 2,
    ENABLE_RUN: 3,
    ENTERING_HOUSE: 4,
    EXITING_HOUSE: 5,
    RESTOCKING: 6,
    UNNOTING: 7,
    STUDYING_LECTERN: 8,
    SELECTING_TAB: 9,
    CREATING_TAB: 10,
}
const STATE_MAP = Object.keys(State).reduce((mapped, key) => { // State map for logging purposes
    mapped[State[key]] = key
    return mapped
}, {})

const CLAY_ID = 1761
const NOTED_CLAY_ID = 1762
const UNOTE_WIDGET = { id: 14352385, child: 3 }
const TABS = {
    "Varrock": {
        requiredRunes: [
            ["Fire", "Lava", "Smoke", "Steam", "Tome of fire"], // Fire
            ["Air", "Dust", "Smoke", "Mist"],                   // Air
            ["Law rune"]                                        // Law
        ],
        widget: 26411028
    }
}
const CREATE_WIDGET_ID = 26411022;

let state: number = -1      // Current state of the script
let tab = TABS["Varrock"]   // Current tab to make
let stateText = ""

function onGameTick(event: rl.events.GameTick) {
    // What should happen each game tick
    tab = TABS[config.getString("tab")] // Get the current tab
    state = getState() // Get the current state
    switch (state) {
        case State.ANIMATING:
        case State.PAUSED:
        case State.STUCK:
            return
        case State.ENTERING_HOUSE:
            return api.objects.interactWithNearestAction("Build mode")
        case State.EXITING_HOUSE:
            return api.objects.interactWithNearestAction("Enter")
        case State.RESTOCKING:
            return api.inventory.useItemOnNpc(NOTED_CLAY_ID, "Phials")
        case State.UNNOTING:
            return api.widgets.interactWith(UNOTE_WIDGET.id, UNOTE_WIDGET.child)
        case State.STUDYING_LECTERN:
            return api.objects.interactWithNameContainsNoCase("Lectern", "Study")
        case State.SELECTING_TAB:
            return api.widgets.interactWith(1, tab.widget, -1, -1)
        case State.CREATING_TAB:
            return api.widgets.interactWith(1, CREATE_WIDGET_ID, -1, -1)
    }
    // Logic for each tick not related to the state
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }
    // if (api.player.isRunOff()) {
    //     if (api.player.runEnergy() > config.getNumber("run")) {
    //         return State.ENABLE_RUN
    //     }
    // }
    if (api.player.isAnimating() || api.player.isMoving()) {
        return State.ANIMATING
    }
    if (api.widgets.get("Select an option", true, true).isPresent()) {
        return State.UNNOTING
    }
    if (!hasItems()) {
        if (config.getString("restock") == "Phials") {
            if (api.npcs.getNearest("Phials").isPresent()) {
                return State.RESTOCKING;
            }
        }
        return State.EXITING_HOUSE;
    }
    if (api.objects.getNearestWithAction("Build mode").isPresent()) {
        return State.ENTERING_HOUSE;
    }
    if (api.widgets.get("Create").isPresent()) {
        return State.CREATING_TAB
    }
    if (api.widgets.isVisible(tab.widget)) {
        return State.SELECTING_TAB
    }
    if (api.objects.getNearestNameContains("Lectern", false)) {
        return State.STUDYING_LECTERN;
    }

    // Handle more states
    return State.STUCK
}

function hasNotedClay() {
    return api.inventory.hasItem(NOTED_CLAY_ID);
}

function hasItems() {
    for (let runes of tab.requiredRunes) {
        if (!api.player.hasAnyItemsNameContainsNoCase(true, false, runes)) {
            // This makes the assumption that if a player is using a staff, it is equipped
            return false;
        }
    }
    return api.inventory.hasItem(CLAY_ID); // Should probably be moved to a fuction called shouldRestock()
}

function render() {
    if (STATE_MAP) {
        switch (state) {
            case State.ANIMATING:
                break
            case State.PAUSED:
                stateText = "Paused"
                break
            case State.STUCK:
                stateText = "Stuck"
                break
            case State.ENTERING_HOUSE:
                stateText = "Entering house"
                break
            case State.EXITING_HOUSE:
                stateText = "Exiting house"
                break
            case State.RESTOCKING:
                stateText = "Talking to Phials"
                break
            case State.UNNOTING:
                stateText = "Unnoting all"
                break
            case State.STUDYING_LECTERN:
                stateText = "Using lectern"
                break
            case State.SELECTING_TAB:
                stateText = "Selecting" + config.getString("tab") + " tab"
                break
            case State.CREATING_TAB:
                stateText = "Creating " + config.getString("tab") + " tab"
                break
        }
        ui.addText(stateText)
    }
}
