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

const REQUIRED_ITEMS = ["Staff of fire", "Wooden shield"]
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

    if (!hasItems()) {
        if (api.bank.isOpen()) {
            uiText = "Withdrawing items"
            return withdrawItems()
        }
        uiText = "Banking"
        return api.bank.useNearest(true)
    }

    if (api.bank.isOpen()) {
        uiText = "Closing bank"
        return api.bank.close()
    }

    uiText = "Stuck"
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

function withdrawItems() {
    // Alternate code:
    // for (let item of getMissingItems()) {
    //     api.bank.withdrawItem(item)
    // }
    getMissingItems().forEach(item => api.bank.withdrawItem(item))
}

function render() {
    if (uiText != undefined) {
        ui.addText(uiText)
    }
}
