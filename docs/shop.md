# shop

```typescript
function asWidget(): Widget;
```

```typescript
function buy(amount: number): boolean;
```

```typescript
function buy(shopItem: ShopItem, amount: number): boolean;
```

```typescript
function buy(item: Widget, amount: number): boolean;
```

```typescript
function buyFifty(id: number): boolean;
```

```typescript
function buyFifty(name: string): boolean;
```

```typescript
function buyFive(id: number): boolean;
```

```typescript
function buyFive(name: string): boolean;
```

```typescript
function buyOne(id: number): boolean;
```

```typescript
function buyOne(name: string): boolean;
```

```typescript
function buyTen(id: number): boolean;
```

```typescript
function buyTen(name: string): boolean;
```

```typescript
function get(id: number): Optional<ShopItem>;
```

```typescript
function get(name: string): Optional<ShopItem>;
```

```typescript
function get(name: string, nameContains: boolean, caseSensitive: boolean): Optional<ShopItem>;
```

```typescript
function getNameContains(name: string): Optional<ShopItem>;
```

```typescript
function getNameContains(name: string, caseSensitive: boolean): Optional<ShopItem>;
```

```typescript
function getNameContainsNoCase(name: string): Optional<ShopItem>;
```

```typescript
function getNoCase(name: string): Optional<ShopItem>;
```

```typescript
function getNoCase(name: string, nameContains: boolean): Optional<ShopItem>;
```

```typescript
function getStock(): number;
```

```typescript
function getStock(item: Widget): number;
```

```typescript
function getStock(name: string): number;
```

```typescript
function getStock(name: string, nameContains: boolean, caseSensitive: boolean): number;
```

```typescript
function getStockNameContains(name: string): number;
```

```typescript
function getStockNameContains(name: string, caseSensitive: boolean): number;
```

```typescript
function getStockNameContainsNoCase(name: string): number;
```

```typescript
function getStockNoCase(name: string): number;
```

```typescript
function getStockNoCase(name: string, nameContains: boolean): number;
```

```typescript
function inStock(): boolean;
```

```typescript
function inventorySearch(): ItemQuery;
```

```typescript
function isOpen(): boolean;
```

```typescript
function search(): ItemQuery;
```

```typescript
function search(id: number): ItemQuery;
```

```typescript
function search(name: string): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function searchNameContains(name: string): ItemQuery;
```

```typescript
function searchNameContains(name: string, caseSensitive: boolean): ItemQuery;
```

```typescript
function searchNameContainsNoCase(name: string): ItemQuery;
```

```typescript
function searchNoCase(name: string): ItemQuery;
```

```typescript
function searchNoCase(name: string, nameContains: boolean): ItemQuery;
```

```typescript
function sellFifty(id: number): boolean;
```

```typescript
function sellFifty(name: string): boolean;
```

```typescript
function sellFive(id: number): boolean;
```

```typescript
function sellFive(name: string): boolean;
```

```typescript
function sellOne(id: number): boolean;
```

```typescript
function sellOne(name: string): boolean;
```

```typescript
function sellTen(id: number): boolean;
```

```typescript
function sellTen(name: string): boolean;
```

```typescript
function useItem(name: string, action: string): boolean;
```

