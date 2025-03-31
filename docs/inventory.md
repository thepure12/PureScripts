# inventory

```typescript
function comboEatWithKarambwan(): boolean;
```

```typescript
function dropAll(name: string): boolean;
```

```typescript
function dropAll(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function dropAll(): boolean;
```

```typescript
function dropAll(itemIds: Collection<Integer>): boolean;
```

```typescript
function dropAll(itemId: number): boolean;
```

```typescript
function dropAll(): boolean;
```

```typescript
function dropAllExcept(): boolean;
```

```typescript
function dropAllExcept(itemIds: Collection<Integer>): boolean;
```

```typescript
function dropAllNameContains(name: string): boolean;
```

```typescript
function dropAllNameContains(name: string, caseSensitive: boolean): boolean;
```

```typescript
function dropItem(name: string): boolean;
```

```typescript
function dropItem(itemId: number): boolean;
```

```typescript
function dropItem(item: Widget): boolean;
```

```typescript
function eatFood(): boolean;
```

```typescript
function emptySlots(): number;
```

```typescript
function equipItem(itemId: number): boolean;
```

```typescript
function equipItem(name: string): boolean;
```

```typescript
function filledSlots(): number;
```

```typescript
function getAnyItem(): Optional<Widget>;
```

```typescript
function getAnyItem(itemIds: Collection<Integer>): Optional<Widget>;
```

```typescript
function getItem(id: number): Optional<Widget>;
```

```typescript
function getItem(name: string): Optional<Widget>;
```

```typescript
function getItem(name: string, nameContains: boolean, caseSensitive: boolean, noted: boolean): Optional<Widget>;
```

```typescript
function getItem(name: string, nameContains: boolean, caseSensitive: boolean): Optional<Widget>;
```

```typescript
function getItemAmount(id: number): number;
```

```typescript
function getItemAmount(id: number, stacked: boolean): number;
```

```typescript
function getItemAmount(name: string): number;
```

```typescript
function getItemAmount(name: string, stacked: boolean): number;
```

```typescript
function getItemAmount(name: string, nameContains: boolean, caseSensitive: boolean, stacked: boolean): number;
```

```typescript
function getItemAmountNameContains(name: string): number;
```

```typescript
function getItemAmountNameContains(name: string, stacked: boolean): number;
```

```typescript
function getItemNameContains(name: string): Optional<Widget>;
```

```typescript
function getItemNameContainsNoCase(name: string): Optional<Widget>;
```

```typescript
function getItemNoCase(name: string): Optional<Widget>;
```

```typescript
function getItemNoNote(name: string): Optional<Widget>;
```

```typescript
function getItemWithAction(action: string, ignoreItemIds: Collection<Integer>): Optional<Widget>;
```

```typescript
function getItemWithAction(action: string): Optional<Widget>;
```

```typescript
function getItems(): Widget[];
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean, names: Collection<String>): boolean;
```

```typescript
function hasAnyItems(): boolean;
```

```typescript
function hasAnyItems(itemIds: Collection<Integer>): boolean;
```

```typescript
function hasAnyItems(): boolean;
```

```typescript
function hasItem(id: number): boolean;
```

```typescript
function hasItem(id: number, stacked: boolean): boolean;
```

```typescript
function hasItem(id: number, stacked: boolean, amount: number): boolean;
```

```typescript
function hasItem(name: string): boolean;
```

```typescript
function hasItem(name: string, stacked: boolean): boolean;
```

```typescript
function hasItem(name: string, amount: number): boolean;
```

```typescript
function hasItem(name: string, stacked: boolean, amount: number): boolean;
```

```typescript
function hasItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasItem(name: string, nameContains: boolean, caseSensitive: boolean, stacked: boolean, amount: number): boolean;
```

```typescript
function hasItemNameContains(name: string): boolean;
```

```typescript
function hasItemNameContains(name: string, caseSensitive: boolean, stacked: boolean, amount: number): boolean;
```

```typescript
function hasItems(): boolean;
```

```typescript
function hasItems(): boolean;
```

```typescript
function hasNotedItems(): boolean;
```

```typescript
function interactAllWithAction(action: string): boolean;
```

```typescript
function interactWithAction(action: string): boolean;
```

```typescript
function isEmpty(): boolean;
```

```typescript
function isFull(): boolean;
```

```typescript
function runePouchContains(id: number): boolean;
```

```typescript
function runePouchContains(ids: Collection<Integer>): boolean;
```

```typescript
function runePouchQuanitity(id: number): number;
```

```typescript
function search(): ItemQuery;
```

```typescript
function search(id: number): ItemQuery;
```

```typescript
function search(itemIds: Collection<Integer>): ItemQuery;
```

```typescript
function search(): ItemQuery;
```

```typescript
function search(name: string): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean, noted: boolean): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function searchNameContains(name: string, caseSensitive: boolean): ItemQuery;
```

```typescript
function searchNameContainsNoCase(name: string): ItemQuery;
```

```typescript
function searchNoCase(name: string, nameContains: boolean): ItemQuery;
```

```typescript
function searchNoted(name: string): ItemQuery;
```

```typescript
function searchWithAction(action: string): ItemQuery;
```

```typescript
function useItem(itemId: number, action: string): boolean;
```

```typescript
function useItem(name: string, action: string): boolean;
```

```typescript
function useItem(name: string, nameContains: boolean, caseSensitive: boolean, action: string): boolean;
```

```typescript
function useItem(item: Widget, action: string): boolean;
```

```typescript
function useItemNameContains(name: string, action: string): boolean;
```

```typescript
function useItemNameContainsNoCase(name: string, action: string): boolean;
```

```typescript
function useItemNameContainsNoCaseOnNearestObject(itemName: string, objectId: number): boolean;
```

```typescript
function useItemNameContainsOnNearestObject(itemName: string, objectId: number): boolean;
```

```typescript
function useItemNoCase(name: string, action: string): boolean;
```

```typescript
function useItemNoCaseOnNearestObject(itemName: string, objectId: number): boolean;
```

```typescript
function useItemOnItem(firstId: number, secondId: number): boolean;
```

```typescript
function useItemOnItem(firstId: number, secondName: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function useItemOnItem(firstName: string, secondName: string): boolean;
```

```typescript
function useItemOnItem(firstName: string, firstNameContains: boolean, firstCaseSensitive: boolean, secondName: string, secondNameContains: boolean, secondCaseSensitive: boolean): boolean;
```

```typescript
function useItemOnItem(first: Widget, secondId: number): boolean;
```

```typescript
function useItemOnItem(first: Widget, second: Widget): boolean;
```

```typescript
function useItemOnNearestNpc(itemName: string, npcId: number): boolean;
```

```typescript
function useItemOnNearestObject(itemId: number, objectId: number): boolean;
```

```typescript
function useItemOnNearestObject(id: number, objectName: string): boolean;
```

```typescript
function useItemOnNearestObject(itemId: number, objectName: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function useItemOnNearestObject(itemName: string, objectId: number): boolean;
```

```typescript
function useItemOnNearestObject(itemName: string, nameContains: boolean, caseSensitive: boolean, objectId: number): boolean;
```

```typescript
function useItemOnNearestObject(itemName: string, objectName: string): boolean;
```

```typescript
function useItemOnNearestObject(itemName: string, itemNameContains: boolean, itemCaseSensitive: boolean, objectName: string, objectNameContains: boolean, objectCaseSensitive: boolean): boolean;
```

```typescript
function useItemOnNearestObjectNameContains(id: number, objectName: string): boolean;
```

```typescript
function useItemOnNearestObjectNameContainsNoCase(id: number, objectName: string): boolean;
```

```typescript
function useItemOnNearestObjectNoCase(id: number, objectName: string): boolean;
```

```typescript
function useItemOnNpc(itemId: number, npcId: number): boolean;
```

```typescript
function useItemOnNpc(itemName: string, npcId: number): boolean;
```

```typescript
function useItemOnNpc(itemName: string, nameContains: boolean, caseSensitive: boolean, npcId: number): boolean;
```

```typescript
function useItemOnNpc(itemId: number, npcName: string): boolean;
```

```typescript
function useItemOnNpc(itemId: number, npcName: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function useItemOnNpc(itemName: string, npcName: string): boolean;
```

```typescript
function useItemOnNpc(itemName: string, itemNameContains: boolean, itemCaseSensitive: boolean, npcName: string, npcNameContains: boolean, npcCaseSensitive: boolean): boolean;
```

```typescript
function useItemOnNpc(itemName: string, npc: NPC): boolean;
```

```typescript
function useItemOnNpc(item: Widget, npc: NPC): boolean;
```

```typescript
function useItemOnObject(itemName: string, nameContains: boolean, caseSensitive: boolean, object: TileObject): boolean;
```

```typescript
function useItemOnObject(item: Widget, tileObject: TileObject): boolean;
```

```typescript
function useItemOnObject(itemName: string, itemNameContains: boolean, itemCaseSensitive: boolean, noted: boolean, objectName: string, objectNameContains: boolean, objectCaseSensitive: boolean, nearest: boolean): boolean;
```

```typescript
function useItemOnObjectAtLocation(itemName: string, objectName: string, x: number, y: number): boolean;
```

```typescript
function useItemOnObjectAtLocation(itemName: string, objectName: string, x: number, y: number, z: number): boolean;
```

```typescript
function useItemOnObjectAtLocation(itemName: string, objectName: string, location: WorldPoint): boolean;
```

```typescript
function useItemOnObjectAtLocation(itemName: string, itemNameContains: boolean, itemCaseSensitive: boolean, objectName: string, objectNameContains: boolean, objectCaseSensitive: boolean, x: number, y: number, plane: number): boolean;
```

```typescript
function useItemOnObjectAtLocation(itemName: string, itemNameContains: boolean, itemCaseSensitive: boolean, objectName: string, objectNameContains: boolean, objectCaseSensitive: boolean, location: WorldPoint): boolean;
```

```typescript
function useItemWithAction(action: string, ignoreItemIds: Collection<Integer>): boolean;
```

```typescript
function useItemWithAction(action: string): boolean;
```

