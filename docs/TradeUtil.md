# TradeUtil

```typescript
function accept(): boolean;
```

```typescript
function acceptFromQueue(name: string): boolean;
```

```typescript
function acceptNext(): boolean;
```

```typescript
function acceptPlayerTrade(): boolean;
```

```typescript
function acceptPlayerTrade(name: string): boolean;
```

```typescript
function getNextTradeRequest(): string;
```

```typescript
function getNextTradeRequest(removeFromQueue: boolean): string;
```

```typescript
function isOpen(): boolean;
```

```typescript
function isWaitingForOtherPlayer(): boolean;
```

```typescript
function offerItem(id: number): boolean;
```

```typescript
function offerItem(name: string): boolean;
```

```typescript
function offerItem(name: string, amount: number): boolean;
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
function onChatMessage(event: ChatMessage): void;
```

```typescript
function search(id: number): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function tradePlayer(name: string): boolean;
```

