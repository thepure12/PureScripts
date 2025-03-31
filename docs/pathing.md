# pathing

```typescript
function canPathToObject(name: string): boolean;
```

```typescript
function canPathToObject(tileObject: TileObject): boolean;
```

```typescript
function cancelWebwalk(): void;
```

```typescript
function disableTeleports(): void;
```

```typescript
function enableInventoryTeleports(consumable: boolean): void;
```

```typescript
function getCollision(radius: number): WorldPoint[];
```

```typescript
function getCollision(worldPoint: WorldPoint, radius: number): WorldPoint[];
```

```typescript
function getCollision(worldArea: WorldArea): WorldPoint[];
```

```typescript
function getPath(end: WorldPoint): WorldPoint[];
```

```typescript
function getPath(start: WorldPoint, end: WorldPoint): WorldPoint[];
```

```typescript
function isWebwalking(): boolean;
```

```typescript
function pathContains(): boolean;
```

```typescript
function pathContains(): boolean;
```

```typescript
function reset(): void;
```

```typescript
function restartPathfinding(start: WorldPoint, end: WorldPoint): void;
```

```typescript
function walk(x: number, y: number): boolean;
```

```typescript
function walkEast(tiles: number): boolean;
```

```typescript
function walkNorth(tiles: number): boolean;
```

```typescript
function walkNortheast(tilesNorth: number, tilesEast: number): boolean;
```

```typescript
function walkNorthwest(tilesNorth: number, tilesEast: number): boolean;
```

```typescript
function walkSouth(tiles: number): boolean;
```

```typescript
function walkSoutheast(tilesNorth: number, tilesEast: number): boolean;
```

```typescript
function walkSouthwest(tilesNorth: number, tilesEast: number): boolean;
```

```typescript
function walkTo(x: number, y: number, plane: number): boolean;
```

```typescript
function walkTo(worldPoint: WorldPoint): boolean;
```

```typescript
function walkTo(x: number, y: number, plane: number, radius: number): boolean;
```

```typescript
function walkTo(worldPoint: WorldPoint, radius: number): boolean;
```

```typescript
function walkTo(worldArea: WorldArea): boolean;
```

```typescript
function walkToward(x: number, y: number, plane: number): boolean;
```

```typescript
function walkToward(npc: NPC): boolean;
```

```typescript
function walkToward(tileObject: TileObject): boolean;
```

```typescript
function walkToward(destination: WorldPoint): boolean;
```

```typescript
function walkToward(worldPoints: Collection<WorldPoint>, dangerPoints: Collection<WorldPoint>, collisionPoints: Collection<WorldPoint>, endPoint: WorldPoint): boolean;
```

```typescript
function walkTowardNearestSafe(worldArea: WorldArea, dangerNpc: NPC, dangerRadius: number, collisionPoints: Collection<WorldPoint>): boolean;
```

```typescript
function walkTowardNearestSafe(worldArea: WorldArea, dangerPoints: Collection<WorldPoint>, collisionPoints: Collection<WorldPoint>): boolean;
```

```typescript
function walkTowardNearestSafe(worldPoints: Collection<WorldPoint>, dangerPoints: Collection<WorldPoint>, collisionPoints: Collection<WorldPoint>): boolean;
```

```typescript
function walkWest(tiles: number): boolean;
```

```typescript
function webwalkTo(worldArea: WorldArea): void;
```

```typescript
function webwalkTo(worldArea: WorldArea, fuzzy: boolean): void;
```

```typescript
function webwalkTo(x: number, y: number, plane: number): void;
```

```typescript
function webwalkTo(worldPoint: WorldPoint): void;
```

```typescript
function webwalkTo(worldPoint: WorldPoint, fuzzy: boolean): void;
```

```typescript
function webwalkTo(worldPoint: WorldPoint, radius: number): void;
```

```typescript
function webwalkTo(x: number, y: number, plane: number, radius: number): void;
```

