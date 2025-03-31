# WidgetUtil

```typescript
function get(id: number): Optional<Widget>;
```

```typescript
function get(text: string): Optional<Widget>;
```

```typescript
function get(text: string, textContains: boolean, caseSensitive: boolean): Optional<Widget>;
```

```typescript
function getHasItemId(widgetId: number): Optional<Widget>;
```

```typescript
function getItemId(widgetId: number, itemId: number): Optional<Widget>;
```

```typescript
function getItemId(itemId: number): Optional<Widget>;
```

```typescript
function getNoCase(text: string): Optional<Widget>;
```

```typescript
function getNoCase(text: string, textContains: boolean): Optional<Widget>;
```

```typescript
function getTextContains(text: string): Optional<Widget>;
```

```typescript
function getTextContains(text: string, caseSensitive: boolean): Optional<Widget>;
```

```typescript
function getTextContainsNoCase(text: string): Optional<Widget>;
```

```typescript
function handleContinue(): boolean;
```

```typescript
function interactWith(id: number, childId: number): boolean;
```

```typescript
function interactWith(id: number): boolean;
```

```typescript
function interactWith(actionFieldNo: number, widgetId: number, itemId: number, childId: number): boolean;
```

```typescript
function interactWith(text: string): boolean;
```

```typescript
function interactWith(text: string, textContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function interactWithCookAll(): boolean;
```

```typescript
function interactWithMake(product: string): boolean;
```

```typescript
function interactWithMakeAll(material: string, option: string): boolean;
```

```typescript
function interactWithTextContains(text: string): boolean;
```

```typescript
function interactWithTextContains(text: string, caseSensitive: boolean): boolean;
```

```typescript
function isOptionMenuOpen(): boolean;
```

```typescript
function isVisible(id: number): boolean;
```

```typescript
function search(): WidgetQuery;
```

```typescript
function search(id: number): WidgetQuery;
```

```typescript
function search(text: string): WidgetQuery;
```

```typescript
function search(text: string, textContains: boolean, caseSensitive: boolean): WidgetQuery;
```

```typescript
function searchHasItemId(widgetId: number): WidgetQuery;
```

```typescript
function searchItemId(itemId: number): WidgetQuery;
```

```typescript
function searchItemId(widgetId: number, itemId: number): WidgetQuery;
```

```typescript
function searchNoCase(text: string): WidgetQuery;
```

```typescript
function searchNoCase(text: string, textContains: boolean): WidgetQuery;
```

```typescript
function searchTextContains(text: string): WidgetQuery;
```

```typescript
function searchTextContains(text: string, caseSensitive: boolean): WidgetQuery;
```

```typescript
function searchTextContainsNoCase(text: string): WidgetQuery;
```

```typescript
function selectHighlightedOption(): boolean;
```

```typescript
function selectOption(option: number): boolean;
```

```typescript
function selectOption(option: number, ignoreHidden: boolean): boolean;
```

```typescript
function selectOptionIgnoreHidden(option: number): boolean;
```

