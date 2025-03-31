# equipment

```typescript
function getEquipmentMap(): HashMap<EquipmentInventorySlot, Integer>;
```

```typescript
function getItem(name: string, nameContains: boolean, caseSensitive: boolean): Optional<EquipmentItemWidget>;
```

```typescript
function getItemAmount(name: string, nameContains: boolean, caseSensitive: boolean, stacked: boolean): number;
```

```typescript
function getItemInAmmo(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInCape(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInFeet(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInHands(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInHead(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInLegs(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInMainHand(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInNecklace(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInOffHand(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInRing(): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInSlot(slot: EquipmentInventorySlot): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInSlot(slot: EquipmentSlot): Optional<EquipmentItemWidget>;
```

```typescript
function getItemInTorso(): Optional<EquipmentItemWidget>;
```

```typescript
function hasAllItems(): boolean;
```

```typescript
function hasAllItems(): boolean;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean, itemNames: Collection<String>): boolean;
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
function hasItem(itemName: string): boolean;
```

```typescript
function hasItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasItem(id: number): boolean;
```

```typescript
function hasItemNameContains(name: string): boolean;
```

```typescript
function interactWith(slot: EquipmentSlot, action: string): boolean;
```

```typescript
function interactWithAmmo(action: string): boolean;
```

```typescript
function interactWithCape(action: string): boolean;
```

```typescript
function interactWithFeet(action: string): boolean;
```

```typescript
function interactWithHands(action: string): boolean;
```

```typescript
function interactWithHead(action: string): boolean;
```

```typescript
function interactWithLegs(action: string): boolean;
```

```typescript
function interactWithMainHand(action: string): boolean;
```

```typescript
function interactWithNecklace(action: string): boolean;
```

```typescript
function interactWithOffHand(action: string): boolean;
```

```typescript
function interactWithRing(action: string): boolean;
```

```typescript
function interactWithTorso(action: string): boolean;
```

```typescript
function search(): EquipmentItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): EquipmentItemQuery;
```

