# player

```typescript
function enableRun(): boolean;
```

```typescript
function enableRun(threshold: number): boolean;
```

```typescript
function enableSpec(): void;
```

```typescript
function get(): Player;
```

```typescript
function getBoostedSkillLevel(skill: string): number;
```

```typescript
function getCombatLevel(): number;
```

```typescript
function getItemAmount(itemId: number): number;
```

```typescript
function getItemAmount(itemId: number, includedNoted: boolean): number;
```

```typescript
function getLocation(): WorldPoint;
```

```typescript
function getNPCInteractingWith(): NPC;
```

```typescript
function getSkillExperience(skill: string): number;
```

```typescript
function getSkillLevel(username: string, skill: string): number;
```

```typescript
function getSkillLevel(skill: string): number;
```

```typescript
function getWildyLevel(): number;
```

```typescript
function getXpForLevel(level: number): number;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean, searchEquipment: boolean, searchBank: boolean, itemNames: Collection<String>): boolean;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean, searchEquipment: boolean, searchBank: boolean): boolean;
```

```typescript
function hasAnyItemsNameContainsNoCase(searchEquipment: boolean, searchBank: boolean): boolean;
```

```typescript
function hasAnyItemsNameContainsNoCase(searchEquipment: boolean, searchBank: boolean, itemNames: Collection<String>): boolean;
```

```typescript
function hasItem(name: string): boolean;
```

```typescript
function hasItem(id: number): boolean;
```

```typescript
function hp(): number;
```

```typescript
function inMulti(): boolean;
```

```typescript
function inRegion(region: number): boolean;
```

```typescript
function inWorldArea(worldPoint: WorldPoint, radius: number): boolean;
```

```typescript
function inWorldArea(worldPoint: WorldPoint, radius: number, inclusive: boolean): boolean;
```

```typescript
function inWorldArea(x: number, y: number, plane: number, radius: number): boolean;
```

```typescript
function inWorldArea(x: number, y: number, plane: number, radius: number, inclusive: boolean): boolean;
```

```typescript
function inWorldArea(x: number, y: number, width: number, height: number, plane: number): boolean;
```

```typescript
function inWorldArea(worldArea: WorldArea): boolean;
```

```typescript
function inWorldAreaFromPoints(x1: number, y1: number, x2: number, y2: number): boolean;
```

```typescript
function inWorldAreaFromPoints(x1: number, y1: number, x2: number, y2: number, plane: number): boolean;
```

```typescript
function isAnimating(): boolean;
```

```typescript
function isAnimating(): boolean;
```

```typescript
function isAnimatingWithinDistance(animationId: number, npc: NPC, distance: number): boolean;
```

```typescript
function isAnimatingWithinDistance(animationId: number, object: TileObject, distance: number): boolean;
```

```typescript
function isAnimation(ignoreAnimationIds: Collection<Integer>): boolean;
```

```typescript
function isAtWorldPoint(x: number, y: number): boolean;
```

```typescript
function isAtWorldPoint(x: number, y: number, plane: number): boolean;
```

```typescript
function isAtWorldPoint(worldPoint: WorldPoint): boolean;
```

```typescript
function isAtWorldPoints(worldPoints: Collection<WorldPoint>): boolean;
```

```typescript
function isAutoRetaliating(): boolean;
```

```typescript
function isDoingAnimation(animationIds: Collection<Integer>): boolean;
```

```typescript
function isDoingAnimation(): boolean;
```

```typescript
function isDoingAnimation(animationId: number): boolean;
```

```typescript
function isInWildy(): boolean;
```

```typescript
function isInteracting(): boolean;
```

```typescript
function isInteractingWithNPC(): boolean;
```

```typescript
function isInteractingWithNPC(name: string): boolean;
```

```typescript
function isInteractingWithNPC(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function isInteractingWithNPC(id: number): boolean;
```

```typescript
function isLoggedIn(): boolean;
```

```typescript
function isMoving(): boolean;
```

```typescript
function isRunOff(): boolean;
```

```typescript
function isStaminaActive(): boolean;
```

```typescript
function isTeleBlocked(): boolean;
```

```typescript
function legacyLogin(username: string, password: string): void;
```

```typescript
function logout(): void;
```

```typescript
function onGameTick(tick: GameTick): void;
```

```typescript
function reset(): void;
```

```typescript
function runEnergy(): number;
```

```typescript
function specEnabled(): boolean;
```

```typescript
function specEnergy(): number;
```

```typescript
function toggleSpec(): boolean;
```

