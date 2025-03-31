# groundItems

```typescript
function get(itemId: number): Optional<ETileItem>;
```

```typescript
function get(itemId: number, nearest: boolean): Optional<ETileItem>;
```

```typescript
function get(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): Optional<ETileItem>;
```

```typescript
function getAllWithLocation(worldPoint: WorldPoint): any[];
```

```typescript
function getAllWithinDistanceTo(worldPoint: WorldPoint, distance: number): any[];
```

```typescript
function getItemComposition(eTileItem: ETileItem): ItemComposition;
```

```typescript
function getNearest(itemId: number): Optional<ETileItem>;
```

```typescript
function getNearestInArea(name: string, worldArea: WorldArea): Optional<ETileItem>;
```

```typescript
function getNearestNameContainsNoCaseWithinDistance(name: string, distance: number): Optional<ETileItem>;
```

```typescript
function getNearestNameContainsWithinDistance(name: string, caseSensitive: boolean, distance: number): Optional<ETileItem>;
```

```typescript
function getNearestTo(worldPoint: WorldPoint): Optional<ETileItem>;
```

```typescript
function getNearestWithinDistance(itemId: number, distance: number): Optional<ETileItem>;
```

```typescript
function getNearestWithinDistance(name: string, nameContains: boolean, caseSensitive: boolean, distance: number): Optional<ETileItem>;
```

```typescript
function getNearestWithinDistanceTo(name: string, worldPoint: WorldPoint, distance: number): Optional<ETileItem>;
```

```typescript
function getWithLocation(worldPoint: WorldPoint): Optional<ETileItem>;
```

```typescript
function getWithinDistance(itemId: number, distance: number, nearest: boolean): Optional<ETileItem>;
```

```typescript
function getWithinDistance(name: string, nameContains: boolean, caseSensitive: boolean, distance: number, nearest: boolean): Optional<ETileItem>;
```

```typescript
function hasTrackedItems(): boolean;
```

```typescript
function interactWith(eTileItem: ETileItem, actionFieldNo: number): boolean;
```

```typescript
function lootItem(name: string): boolean;
```

```typescript
function lootItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function lootItem(itemId: number): boolean;
```

```typescript
function lootItem(itemSpawned: ItemSpawned): boolean;
```

```typescript
function lootItem(location: WorldPoint, groundItem: TileItem): boolean;
```

```typescript
function lootItem(eTileItem: ETileItem): boolean;
```

```typescript
function lootItemNameContains(name: string): boolean;
```

```typescript
function lootItemNameContainsNoCase(name: string): boolean;
```

```typescript
function lootItemNoCase(name: string): boolean;
```

```typescript
function lootNearestInArea(name: string, x1: number, y1: number, x2: number, y2: number, plane: number): boolean;
```

```typescript
function lootNearestInArea(name: string, worldArea: WorldArea): boolean;
```

```typescript
function lootNearestWithinDistanceTo(name: string, worldPoint: WorldPoint, distance: number): boolean;
```

```typescript
function lootNext(): boolean;
```

```typescript
function nameEquals(itemSpawned: ItemSpawned, name: string): boolean;
```

```typescript
function nameEquals(itemId: number, name: string): boolean;
```

```typescript
function nameEqualsIgnoreCase(itemSpawned: ItemSpawned, name: string): boolean;
```

```typescript
function nameEqualsIgnoreCase(itemId: number, name: string): boolean;
```

```typescript
function reset(): void;
```

```typescript
function search(): TileItemQuery;
```

```typescript
function search(itemId: number): TileItemQuery;
```

```typescript
function search(): TileItemQuery;
```

```typescript
function search(itemIds: Integer[]): TileItemQuery;
```

```typescript
function search(name: string): TileItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): TileItemQuery;
```

```typescript
function searchInArea(itemId: number, worldArea: WorldArea): TileItemQuery;
```

```typescript
function searchInRadius(itemId: number, radius: number): TileItemQuery;
```

```typescript
function setTrackSpawned(track: boolean): void;
```

```typescript
function setTrackSpawned(track: boolean, callback: Lootable): void;
```

