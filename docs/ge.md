# ge

```typescript
function buy(): boolean;
```

```typescript
function buyItem(id: number, quantity: number, price: number): void;
```

```typescript
function buyItemPercentOver(id: number, quantity: number, percent: number): void;
```

```typescript
function buyItemPercentUnder(id: number, quantity: number, percent: number): void;
```

```typescript
function canCollect(): boolean;
```

```typescript
function collect(): boolean;
```

```typescript
function confirmOffer(): boolean;
```

```typescript
function decreasePriceByPercent(percent: number): boolean;
```

```typescript
function decreasePriceFivePercent(): boolean;
```

```typescript
function exchangeClerk(): boolean;
```

```typescript
function exchangeClerk(nearest: boolean): boolean;
```

```typescript
function getBuyOfferItem(): ItemComposition;
```

```typescript
function getBuyOfferItemId(): number;
```

```typescript
function getBuyOfferItemName(): string;
```

```typescript
function getGuidePrice(id: number): number;
```

```typescript
function getInventoryItem(id: number): Optional<Widget>;
```

```typescript
function getInventoryItem(name: string): Optional<Widget>;
```

```typescript
function getInventoryItem(name: string, nameContains: boolean, caseSensitive: boolean): Optional<Widget>;
```

```typescript
function getInventoryItemAmount(id: number): number;
```

```typescript
function getInventoryItemAmount(name: string): number;
```

```typescript
function getInventoryItemAmount(name: string, nameContains: boolean, caseSensitive: boolean): number;
```

```typescript
function getOffer(slot: number): Optional<GrandExchangeOffer>;
```

```typescript
function getOffers(): any[];
```

```typescript
function getSellOfferItemId(): number;
```

```typescript
function getSellOfferItemName(): string;
```

```typescript
function getSellOfferPrice(): number;
```

```typescript
function getSellOfferQuantity(): number;
```

```typescript
function hasInventoryItem(id: number): boolean;
```

```typescript
function hasInventoryItem(name: string): boolean;
```

```typescript
function hasInventoryItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasNotedItems(): boolean;
```

```typescript
function hasOffer(id: number): boolean;
```

```typescript
function hasOffers(): boolean;
```

```typescript
function increasePriceByPercent(percent: number): boolean;
```

```typescript
function increasePriceFivePercent(): boolean;
```

```typescript
function increaseQuantityHundred(): boolean;
```

```typescript
function increaseQuantityOne(): boolean;
```

```typescript
function increaseQuantityTen(): boolean;
```

```typescript
function isFull(): boolean;
```

```typescript
function isInGe(): boolean;
```

```typescript
function isMakingOffer(): boolean;
```

```typescript
function isOpen(): boolean;
```

```typescript
function isSelectOfferVisible(): boolean;
```

```typescript
function offerItem(id: number): boolean;
```

```typescript
function offerItem(name: string): boolean;
```

```typescript
function offerItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function offerItem(item: Widget): boolean;
```

```typescript
function offerItemNameContains(name: string): boolean;
```

```typescript
function offerItemNameContains(name: string, caseSensitive: boolean): boolean;
```

```typescript
function offerItemNameContainsNoCase(name: string): boolean;
```

```typescript
function offerItemNoCase(name: string): boolean;
```

```typescript
function offerItemNoCase(name: string, nameContains: boolean): boolean;
```

```typescript
function open(): boolean;
```

```typescript
function resetMakeOffer(): void;
```

```typescript
function search(): ItemQuery;
```

```typescript
function search(id: number): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function sellItem(id: number, quantity: number, price: number): void;
```

```typescript
function sellItemPercentOver(id: number, quantity: number, percent: number): void;
```

```typescript
function sellItemPercentUnder(id: number, quantity: number, percent: number): void;
```

```typescript
function setBuyOfferItem(id: number): boolean;
```

```typescript
function setGuidePrice(): boolean;
```

```typescript
function setPrice(price: number): boolean;
```

```typescript
function setQuantity(quantity: number): boolean;
```

```typescript
function setQuantityAll(): boolean;
```

