# Main Loop
The **Main Loop** is a function called `loop()` and is where all the logic executes every game tick. This function runs continuously, allowing the script to check conditions, perform actions, and make decisions in real time.

### How It Works
Each time `loop()` runs, the script should
1. Read Config Values – Retrieves user-defined settings from `config.get()`.
2. Check Game State – Evaluates conditions such as inventory, location, or NPC status.
3. Execute Actions – Performs tasks like moving, interacting, or using items.

```typescript
functions loop() {
	// Read config
	// Get current state
	// Perform appropriate action
}
```

#### What's Next?
- **[Checking the Game State](/guide/State.md)**