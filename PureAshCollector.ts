function loop() {
    if (api.player.isRunOff() && api.player.runEnergy() >= 50) {
        api.player.enableRun()
    }
    if (!(api.player.isAnimating() || api.player.isMoving())) {
        if (api.inventory.isFull()) {
            if (api.bank.isOpen()) {
                api.bank.depositAll()
            } else {
                api.bank.useNearestBank()
            }
        } else {
            api.groundItems.lootNearestInArea("Ashes", 3137, 3467, 3199, 3518, 0)
        }
    }
}
