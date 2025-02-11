# Performing Actions
Once the game state has been determined using `getState()`, the script needs to perform actions based on that state. Actions are the core of the script, allowing it to interact with the game world—moving, attacking, banking, collecting items, and more. Generally it's best to stick with performing **one** action per game tick (once per `loop()`).

### Common Actions
- **Interacting with NPCs & Objects**
    - api.npcs.talkTo("Man")
    - api.objects.interactWith("Tree", "Chop down")
- **Handling Inventory & Items**
    - api.inventory.dropAll()
    - api.bank.withdrawItem("Lobster")
- **Movement & Navigation**
    - api.bank.webwalkGrandExchange()
    - api.pathing.walkNorth(4)
- **Combat**
    - api.inventory.eatFood()
    - api.npcs.attack("Goblin")

### Actions in `loop()`
```typescript
function loop() {
    state = getState()
    switch (state) {
        case State.CHOPPING:
            return api.objects.interactWith("Tree", "Chop down")
        case State.DROPPING:
            return api.inventory.dropAll()
        case State.IDLE:
            return
    }
}
```