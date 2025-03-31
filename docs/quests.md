# quests

```typescript
function doQuest(questName: string): boolean;
```

```typescript
function getActiveStepRequiredItems(): any[];
```

```typescript
function getMissingItems(): RequiredItem[];
```

```typescript
function getMissingStepItems(): RequiredItem[];
```

```typescript
function getQuest(questName: string): Quest;
```

```typescript
function getQuestState(questName: string): QuestState;
```

```typescript
function getQuestStateText(questName: string): string;
```

```typescript
function getQuests(): any[];
```

```typescript
function getRequiredItems(name: string): any[];
```

```typescript
function getRequiredQuests(questName: string): any[];
```

```typescript
function getRequiredSkills(questName: string): any[];
```

```typescript
function getSelectedQuestName(): string;
```

```typescript
function getStepName(): string;
```

```typescript
function getStepNpcId(): number;
```

```typescript
function getStepObjectId(): number;
```

```typescript
function getStepRequiredItems(): any[];
```

```typescript
function getStepText(): string;
```

```typescript
function getWorldPoint(): Optional<WorldPoint>;
```

```typescript
function hasItems(): boolean;
```

```typescript
function hasStepItems(): boolean;
```

```typescript
function isQuestCompleted(questName: string): boolean;
```

```typescript
function isQuestSelected(): boolean;
```

```typescript
function meetsRequirements(questName: string): boolean;
```

```typescript
function startQuest(questName: string): void;
```

```typescript
function stepNameContains(text: string): boolean;
```

```typescript
function stepTextContains(text: string): boolean;
```

```typescript
function stopQuest(): void;
```

```typescript
function toString(): string;
```

```typescript
function toString(): string;
```

```typescript
function toString(): string;
```

```typescript
function toUpperUnderscore(text: string): string;
```

