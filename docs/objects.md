# objects

```typescript
function cardinalDistanceTo(tileObject: TileObject): number;
```

```typescript
function cardinalDistanceTo(tileObject1: TileObject, tileObject2: TileObject): number;
```

```typescript
function cardinalDistanceTo(tileObject: TileObject, npc: NPC): number;
```

```typescript
function distanceBetween(tileObject1: TileObject, tileObject2: TileObject): number;
```

```typescript
function distanceBetween(tileObject: TileObject, npc: NPC): number;
```

```typescript
function distanceTo(name: string): number;
```

```typescript
function distanceTo(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): number;
```

```typescript
function distanceTo(object: TileObject): number;
```

```typescript
function distanceToAction(action: string, nearest: boolean): number;
```

```typescript
function distanceToNearest(name: string): number;
```

```typescript
function distanceToNearestAction(action: string): number;
```

```typescript
function get(id: number): Optional<TileObject>;
```

```typescript
function get(id: number, nearest: boolean): Optional<TileObject>;
```

```typescript
function get(name: string): Optional<TileObject>;
```

```typescript
function get(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): Optional<TileObject>;
```

```typescript
function getAmountInArea(objectId: number, x1: number, y1: number, x2: number, y2: number, plane: number): number;
```

```typescript
function getAmountInArea(objectId: number, x: number, y: number, radius: number): number;
```

```typescript
function getAmountInArea(objectId: number, x: number, y: number, plane: number, radius: number): number;
```

```typescript
function getAmountInArea(objectId: number, worldPoint: WorldPoint, radius: number): number;
```

```typescript
function getAmountInArea(objectId: number, worldArea: WorldArea): number;
```

```typescript
function getAmountInRadius(objectIds: Collection<Integer>, radius: number): number;
```

```typescript
function getAmountInRadius(objectId: number, radius: number): number;
```

```typescript
function getComposition(id: number): ObjectComposition;
```

```typescript
function getComposition(tileObject: TileObject): ObjectComposition;
```

```typescript
function getInArea(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean, area: WorldArea): Optional<TileObject>;
```

```typescript
function getInfo(tileObject: TileObject): ObjectComposition;
```

```typescript
function getName(objectId: number): string;
```

```typescript
function getName(tileObject: TileObject): string;
```

```typescript
function getNameContains(name: string): Optional<TileObject>;
```

```typescript
function getNameContains(name: string, caseSensitive: boolean, nearest: boolean): Optional<TileObject>;
```

```typescript
function getNameContainsNoCase(name: string, nearest: boolean): Optional<TileObject>;
```

```typescript
function getNearest(id: number): Optional<TileObject>;
```

```typescript
function getNearest(name: string): Optional<TileObject>;
```

```typescript
function getNearest(name: string, nameContains: boolean, caseSensitive: boolean): Optional<TileObject>;
```

```typescript
function getNearestBank(): Optional<TileObject>;
```

```typescript
function getNearestInArea(name: string, area: WorldArea): Optional<TileObject>;
```

```typescript
function getNearestNameContains(name: string, caseSensitive: boolean): Optional<TileObject>;
```

```typescript
function getNearestNameContainsNoCase(name: string): Optional<TileObject>;
```

```typescript
function getNearestNoCase(name: string, nameContains: boolean): Optional<TileObject>;
```

```typescript
function getNearestToPoint(name: string, x: number, y: number): Optional<TileObject>;
```

```typescript
function getNearestToPoint(name: string, x: number, y: number, plane: number): Optional<TileObject>;
```

```typescript
function getNearestToPoint(name: string, worldPoint: WorldPoint): Optional<TileObject>;
```

```typescript
function getNearestWithAction(action: string): Optional<TileObject>;
```

```typescript
function getNoCase(name: string): Optional<TileObject>;
```

```typescript
function getNoCase(name: string, nameContains: boolean, nearest: boolean): Optional<TileObject>;
```

```typescript
function getWithAction(action: string): Optional<TileObject>;
```

```typescript
function getWithAction(action: string, nearest: boolean): Optional<TileObject>;
```

```typescript
function getWithAnyAction(): void;
```

```typescript
function getWithLocation(x: number, y: number): Optional<TileObject>;
```

```typescript
function getWithLocation(x: number, y: number, plane: number): Optional<TileObject>;
```

```typescript
function getWithLocation(worldPoint: WorldPoint): Optional<TileObject>;
```

```typescript
function getWithLocation(name: string, x: number, y: number, plane: number): Optional<TileObject>;
```

```typescript
function getWithLocation(name: string, location: WorldPoint): Optional<TileObject>;
```

```typescript
function getWithLocation(name: string, nameContains: boolean, caseSensitive: boolean, x: number, y: number, plane: number): Optional<TileObject>;
```

```typescript
function getWithLocation(name: string, nameContains: boolean, caseSensitive: boolean, location: WorldPoint): Optional<TileObject>;
```

```typescript
function getWithinDistance(objectId: number, distance: number): Optional<TileObject>;
```

```typescript
function interactWith(object: TileObject, actionFieldNo: number): boolean;
```

```typescript
function interactWith(object: TileObject, actions: string): boolean;
```

```typescript
function interactWith(id: number, action: string): boolean;
```

```typescript
function interactWith(id: number, actions: string): boolean;
```

```typescript
function interactWith(id: number, nearest: boolean, action: string): boolean;
```

```typescript
function interactWith(id: number, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWith(id: number, actionNo: number): boolean;
```

```typescript
function interactWith(id: number, nearest: boolean, actionNo: number): boolean;
```

```typescript
function interactWith(name: string, action: string): boolean;
```

```typescript
function interactWith(name: string, actions: string): boolean;
```

```typescript
function interactWith(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWith(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean, actionFieldNo: number): boolean;
```

```typescript
function interactWithAction(action: string, nearest: boolean): boolean;
```

```typescript
function interactWithAtLocation(name: string, x: number, y: number, actions: string): boolean;
```

```typescript
function interactWithAtLocation(name: string, x: number, y: number, plane: number, actions: string): boolean;
```

```typescript
function interactWithAtLocation(name: string, location: WorldPoint, actions: string): boolean;
```

```typescript
function interactWithAtLocation(name: string, nameContains: boolean, caseSensitive: boolean, x: number, y: number, plane: number, actions: string): boolean;
```

```typescript
function interactWithAtLocation(name: string, nameContains: boolean, caseSensitive: boolean, location: WorldPoint, actions: string): boolean;
```

```typescript
function interactWithInArea(name: string, action: string, worldArea: WorldArea, nearest: boolean): boolean;
```

```typescript
function interactWithInArea(name: string, action: string, x: number, y: number, radius: number): boolean;
```

```typescript
function interactWithInArea(name: string, action: string, x: number, y: number, plane: number, radius: number): boolean;
```

```typescript
function interactWithInArea(name: string, action: string, worldPoint: WorldPoint, radius: number): boolean;
```

```typescript
function interactWithInArea(name: string, action: string, worldPoint: WorldPoint, radius: number, webwalk: boolean): boolean;
```

```typescript
function interactWithInArea(name: string, nameContains: boolean, caseSensitive: boolean, action: string, worldPoint: WorldPoint, radius: number, webwalk: boolean): boolean;
```

```typescript
function interactWithNameContains(name: string, actions: string): boolean;
```

```typescript
function interactWithNameContains(name: string, caseSensitive: boolean, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWithNameContainsNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNearest(id: number, action: string): boolean;
```

```typescript
function interactWithNearest(id: number, actionNo: number): boolean;
```

```typescript
function interactWithNearest(name: string, action: string): boolean;
```

```typescript
function interactWithNearest(name: string, actions: string): boolean;
```

```typescript
function interactWithNearest(name: string, nameContains: boolean, caseSensitive: boolean, actions: string): boolean;
```

```typescript
function interactWithNearest(name: string, actionFieldNo: number): boolean;
```

```typescript
function interactWithNearestAction(action: string): boolean;
```

```typescript
function interactWithNearestNameContains(name: string, actions: string): boolean;
```

```typescript
function interactWithNearestNameContainsNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNearestNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNoCase(name: string, nameContains: boolean, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWithinDistance(objectId: number, distance: number, actions: string): boolean;
```

```typescript
function isOverlappingPlayer(object: TileObject): boolean;
```

```typescript
function isWithinCardinalDistance(objectId: number, distance: number): boolean;
```

```typescript
function isWithinCardinalDistance(name: string, distance: number): boolean;
```

```typescript
function isWithinCardinalDistance(name: string, nameContains: boolean, caseSensitive: boolean, distance: number): boolean;
```

```typescript
function isWithinCardinalDistance(object: TileObject, distance: number): boolean;
```

```typescript
function isWithinDistance(objectId: number, distance: number): boolean;
```

```typescript
function isWithinDistance(name: string, distance: number): boolean;
```

```typescript
function isWithinDistance(name: string, nameContains: boolean, caseSensitive: boolean, distance: number): boolean;
```

```typescript
function isWithinDistance(object: TileObject, distance: number): boolean;
```

```typescript
function search(): TileObjectQuery;
```

```typescript
function search(id: number): TileObjectQuery;
```

```typescript
function search(itemIds: Collection<Integer>): TileObjectQuery;
```

```typescript
function search(name: string): TileObjectQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): TileObjectQuery;
```

```typescript
function searchNameContains(name: string, caseSensitive: boolean): TileObjectQuery;
```

```typescript
function searchNameContainsNoCase(name: string): TileObjectQuery;
```

```typescript
function searchNoCase(name: string, nameContains: boolean): TileObjectQuery;
```

```typescript
function searchWithAction(action: string): TileObjectQuery;
```

```typescript
function searchWithinDistanceToPoint(worldPoint: WorldPoint, distance: number): TileObjectQuery;
```

