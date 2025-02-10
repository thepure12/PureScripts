# Setting Up the Config
Before diving into script logic, it’s essential to define the config early. The config acts as a central object that holds key settings for your script, ensuring flexibility and ease of customization.

## What is the Config?
The config is an object where each key represents a specific config item. These keys allow you to define settings such as execution parameters, user preferences, and script behavior. By structuring your config properly, you make your script more adaptable and easier to use.

## Understanding Default Values
Each config item has a default value, which plays a crucial role—it determines the type of the config item (e.g., boolean, integer, string). Setting appropriate default values helps prevent errors and ensures that the script functions correctly even when no user input is provided.

In the next sections, we'll walk through how to define and use your config effectively. Let’s get started!

## Config Item
```javascript
items: { label: "Items Needed", value: "" }
```
![textbox_img](https://i.postimg.cc/XNHx1Fjq/config-item.png)

**Breakdown**
- `items` – This is the key that identifies the config item. It serves as a reference point for accessing this particular config item.
- `label: "Items Needed"` – This provides a user-friendly name for the config item. It will produce a text box in the config menu.
- `value: ""` – This defines the default value of the config item. Since it's an empty string (""), it suggests that this setting expects a *text input*, where the user can specify the items needed.

### What It Does
This config item allows the script to store a list of required items. Initially, the value is empty, meaning no items are set. However, the user can populate it with item names (e.g., "Lobster, Rune Scimitar") to define what the script should recognize as needed, and handled in the code.

### Config Item Types
- string
- number
- boolean

### Dropdown Menus
Config items can be a dropdown menus by providing an options attribute where the value is either an array of strings or numbers.
```javascript
food: { // Dropdown menu
    label: "Dropdown", value: "Shark",
    options: ["Shark", "Swordfish", "Monkfish",]
}
```
![dropdown_img](https://i.postimg.cc/5tVmQS37/dropdown.png)

### Setting Config
Now that you've defined your config object, you need to apply it using the config.setConfig(CONFIG) function. This step ensures that your script recognizes and uses the defined configuration settings.
```javascript
config.setConfig(CONFIG) // Set the default config
```

### Example Config Setup
```javacript
const CONFIG = {
    items: { label: "Items Needed", value: "" }, // Plain text
    bank: { label: "Bank", value: true }, // Checkbox
    food: { // Dropdown menu
        label: "Dropdown", value: "Shark",
        options: ["Shark", "Swordfish", "Monkfish",]
    },
    run: { label: "Run Threshold", value: 0 }, // Number picker
    logState: {label: "Log State", value: false}, // Allow user to log the current script state
    pause: { label: "Pause", value: true } // Allow user to select config before the script start running
}
config.setConfig(CONFIG) // Set the default config
```