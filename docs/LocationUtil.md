# LocationUtil

```typescript
function distanceTo(point: WorldPoint): number;
```

```typescript
function distanceTo(x: number, y: number, plane: number): number;
```

```typescript
function fromInstance(x1: number, y1: number, x2: number, y2: number, plane: number): WorldArea;
```

```typescript
function fromInstance(worldArea: WorldArea): WorldArea;
```

```typescript
function fromInstance(x: number, y: number, plane: number): WorldPoint;
```

```typescript
function fromInstance(worldPoint: WorldPoint): WorldPoint;
```

```typescript
function fromLocal(localPoint: LocalPoint): WorldPoint;
```

```typescript
function getMine(name: string): Mine;
```

```typescript
function getMineNames(): any[];
```

```typescript
function getMineNearestToBankWithOre(ore: string): Optional<Mine>;
```

```typescript
function getMinesWithOre(ore: string): any[];
```

```typescript
function getMinesWithOre(ore: string, hasBank: boolean): any[];
```

```typescript
function getMinesWithOre(ore: string, hasBank: boolean, plane: number): any[];
```

```typescript
function getNearestWithOre(ore: string): Mine;
```

```typescript
function getRandomElement(array: any[]): <T> T;
```

```typescript
function getRandomMineWithOre(ore: string): Mine;
```

```typescript
function getRandomMineWithOre(ore: string, hasBank: boolean): Mine;
```

```typescript
function getRandomMineWithOre(ore: string, hasBank: boolean, plane: number): Mine;
```

```typescript
function getRandomPointInArea(x: number, y: number, radius: number): WorldPoint;
```

```typescript
function getRandomPointInArea(worldArea: WorldArea): WorldPoint;
```

```typescript
function inArea(worldArea: WorldArea): boolean;
```

```typescript
function inArea(x: number, y: number, width: number, height: number, plane: number, isPoints: boolean): boolean;
```

```typescript
function isPointInArea(worldPoint: WorldPoint, worldArea: WorldArea): boolean;
```

```typescript
function toInstance(x: number, y: number): WorldPoint;
```

```typescript
function toInstance(x: number, y: number, plane: number): WorldPoint;
```

```typescript
function toInstance(worldPoint: WorldPoint): WorldPoint;
```

```typescript
function toInstance(worldArea: WorldArea): WorldArea;
```

```typescript
function worldArea(x: number, y: number, width: number, height: number, plane: number): WorldArea;
```

```typescript
function worldAreaFromPoints(x1: number, y1: number, x2: number, y2: number, plane: number): WorldArea;
```

```typescript
function worldAreaFromRadius(radius: number): WorldArea;
```

```typescript
function worldAreaFromRadius(worldPoint: WorldPoint, radius: number): WorldArea;
```

```typescript
function worldPoint(x: number, y: number, plane: number): WorldPoint;
```

```typescript
function worldPoint(x: number, y: number): WorldPoint;
```

