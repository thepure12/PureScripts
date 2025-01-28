const CONFIG = {
    ore: {
        label: "Ore", value: "Copper", options: [
            "Copper", "Tin", "Iron", "Coal", "Mithril", "Adamant", "Runite"
        ]
    },
    pause: { label: "Pause", value: true }
}
config.setConfig(CONFIG)

function onGameTick(event: Object) {
    if (config.getBoolean("pause") || api.player.isAnimating() || api.player.isMoving()) {
        return
    }
    const ore = config.getString("ore")
    if (api.inventory.hasItem(`${ore} ore`)) {
        api.inventory.useItem(ore, "Drop")
        return
    }
    api.objects.interactWithNearest(`${ore} rocks`, "Mine")
}
