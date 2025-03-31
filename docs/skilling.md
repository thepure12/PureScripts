# skilling

```typescript
function getBestToolIdForLevel(skill: string): number;
```

```typescript
function getBestToolIdForLevel(skill: string, ftpOnly: boolean): number;
```

```typescript
function getBestToolIdForLevel(skill: string, level: number, ftpOnly: boolean): number;
```

```typescript
function getHighestXpForLevel(skill: string): Optional<SkillingOutput>;
```

```typescript
function getHighestXpForLevel(skill: string, ftpOnly: boolean): Optional<SkillingOutput>;
```

```typescript
function getHighestXpForLevel(skill: string, level: number, ftpOnly: boolean): Optional<SkillingOutput>;
```

```typescript
function getInputsNeededForLevel(skill: string, output: SkillingOutput, level: number): any[];
```

```typescript
function getInputsNeededForNextHighestXpLevel(skill: string): any[];
```

```typescript
function getInputsNeededForNextHighestXpLevel(skill: string, output: SkillingOutput): any[];
```

```typescript
function getInputsNeededForNextHighestXpLevel(skill: string, output: SkillingOutput, ftpOnly: boolean): any[];
```

```typescript
function getNextHighestXpForLevel(skill: string, level: number, ftpOnly: boolean): Optional<SkillingOutput>;
```

```typescript
function getNextHighestXpLevel(skill: string): number;
```

```typescript
function getNextHighestXpLevel(skill: string, ftpOnly: boolean): number;
```

```typescript
function getNextHighestXpLevel(skill: string, startLevel: number, ftpOnly: boolean): number;
```

```typescript
function getSkill(name: string): Skill;
```

```typescript
function search(skill: string): SkillingOutputQuery;
```

```typescript
function search(skill: Skill): SkillingOutputQuery;
```

