# Checking the Game State
**Checking the game state** is a crucial step in the `loop()` function. It allows the script to make informed decisions based on what’s happening in the game at any given moment. By continuously evaluating different aspects of the game, the script can adapt its behavior dynamically.

### What to Check?
1. **Player Status**
	- `api.player.isAnimating()` - Checks if the player is currently performing an action.
	- `api.player.hp()` - Retrieves the player's current HP to decide if healing is needed.
2. **Inventory & Equipment**
	- `api.inventory.hasItem("Lobster")` - Verifies if a specific item is in the inventory.
	- `api.equipment.hasItem("Rune scimitar")` - Verifies if a specific item is equipped
3. **NPCs & Objects**
	- `api.npcs.get("Goblin").isPresent()` - Ensures the NPC is present
	- `api.objects.interactWith("Tree", "Chop down")` - Interact with an object
*These are just a few examples*

**Example: Checking Full Inventory**
```typescript
function shouldBank() {
	return api.inventory.isFull()
}
```

### Why is This Important?
- **Prevents unnecessary actions** (e.g., avoiding trying to loot when inventory is full).
- **Enhances efficiency** by only performing actions when needed.
- **Reduces bot-like behavior** by responding dynamically to game conditions.

### Using a `getState()` Function with an Enum
To keep your script **organized and efficient**, it's a good idea to create a getState() function that evaluates the game state and returns a predefined enum called State. This approach helps simplify decision-making inside loop() by structuring game conditions into clear, manageable states.

#### Defining the `State` Enum
Enums provide named values that represent different game situations, making the script easier to read and maintain.
```typescript
enum State {
	ANIMATING,
	MOVING,
	BANKING,
}
```

#### Implementing `getState()`
The `getState()` function evaluates game conditions and determines what the script should do next.
```typescript
function getState() {
    if (api.player.isAnimating()) {
        return State.ANIMATING
    }
    if (api.player.isMoving()) {
        return State.MOVING
    }
    if (shouldBank()) {
        return State.BANKING
    }
}
```

#### Using `getState()` in `loop()`
Now, instead of checking multiple conditions inside `loop()`, you can use `getState()` to decide what action to take.
```typescript
function loop() {
    state = getState()
    switch (state) {
        case State.ANIMATING:
        case State.MOVING:
            return
        case State.BANKING:
            api.bank.useNearest()
    }
}
```

#### Why Use `getState()`?
- ✅ Simplifies logic – Keeps `loop()` clean and easy to manage.
- ✅ Enhances readability – Uses named states instead of complex conditional statements.
- ✅ Prevents bot-like behavior – Makes the script more adaptable to in-game changes.