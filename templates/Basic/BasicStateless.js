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

let uiText = ""

function loop() {
    if (config.getBoolean("pause")) {
        uiText = "Paused"
        return
    }

    if (api.player.isMoving()) {
        uiText = "Moving"
        return
    }

    if (api.player.isAnimating()) {
        uiText = "Animating"
        return
    }

    if (true) {
        uiText = "Example"
        return
    }
}

function render() {
    if (uiText != undefined) {
        ui.addText(uiText)
    }
}
