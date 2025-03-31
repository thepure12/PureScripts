# NpcUtil

```typescript
function attack(id: number): boolean;
```

```typescript
function attack(name: string): boolean;
```

```typescript
function attack(name: string, nearest: boolean): boolean;
```

```typescript
function attack(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): boolean;
```

```typescript
function attack(npc: NPC): boolean;
```

```typescript
function attackInArea(name: string, x1: number, y1: number, x2: number, y2: number, plane: number): boolean;
```

```typescript
function attackInArea(name: string, worldArea: WorldArea): boolean;
```

```typescript
function attackNameMatches(pattern: string): boolean;
```

```typescript
function attackNameMatches(pattern: string, nearest: boolean): boolean;
```

```typescript
function attackNearestNameContains(name: string): boolean;
```

```typescript
function attackNearestNameContains(name: string, caseSensitive: boolean): boolean;
```

```typescript
function attackNearestNameMatches(pattern: string): boolean;
```

```typescript
function attackNearestNpc(name: string): boolean;
```

```typescript
function attackNearestNpc(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function attackWithinDistance(name: string, distance: number): boolean;
```

```typescript
function cardinalDistanceBetween(npc1: NPC, npc2: NPC): number;
```

```typescript
function cardinalDistanceTo(npc: NPC): number;
```

```typescript
function distanceBetween(npc1: NPC, npc2: NPC): number;
```

```typescript
function distanceTo(npc: NPC): number;
```

```typescript
function distanceTo(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): number;
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
function get(id: number): Optional<NPC>;
```

```typescript
function get(id: number, nearest: boolean): Optional<NPC>;
```

```typescript
function get(name: string): Optional<NPC>;
```

```typescript
function get(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getAll(filter: Predicate<NPC>): NPC[];
```

```typescript
function getAttackable(name: string): Optional<NPC>;
```

```typescript
function getAttackable(name: string, nearest: boolean): Optional<NPC>;
```

```typescript
function getAttackable(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getAttackableNameContains(name: string, caseSensitive: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getAttackableNameContainsNoCase(name: string, nearest: boolean): Optional<NPC>;
```

```typescript
function getAttackableNoCase(name: string, nameContains: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getCardinalNearestWithAction(action: string): Optional<NPC>;
```

```typescript
function getHintArrow(): Optional<NPC>;
```

```typescript
function getInArea(name: string, x1: number, y1: number, x2: number, y2: number, plane: number): Optional<NPC>;
```

```typescript
function getInArea(name: string, worldArea: WorldArea): Optional<NPC>;
```

```typescript
function getInArea(id: number, x1: number, y1: number, x2: number, y2: number, plane: number, nearest: boolean): Optional<NPC>;
```

```typescript
function getInArea(id: number, worldArea: WorldArea, nearest: boolean): Optional<NPC>;
```

```typescript
function getNameContains(name: string): Optional<NPC>;
```

```typescript
function getNameContains(name: string, caseSensitive: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getNameContainsNoCase(name: string, nearest: boolean): Optional<NPC>;
```

```typescript
function getNameMatches(pattern: string): Optional<NPC>;
```

```typescript
function getNameMatches(pattern: string, nearest: boolean): Optional<NPC>;
```

```typescript
function getNearest(id: number): Optional<NPC>;
```

```typescript
function getNearest(name: string): Optional<NPC>;
```

```typescript
function getNearest(name: string, nameContains: boolean, caseSensitive: boolean): Optional<NPC>;
```

```typescript
function getNearestAttackable(name: string): Optional<NPC>;
```

```typescript
function getNearestAttackable(name: string, nameContains: boolean, caseSensitive: boolean): Optional<NPC>;
```

```typescript
function getNearestAttackableNameContainNoCase(name: string): Optional<NPC>;
```

```typescript
function getNearestAttackableNameContains(name: string): Optional<NPC>;
```

```typescript
function getNearestAttackableNameContains(name: string, caseSensitive: boolean): Optional<NPC>;
```

```typescript
function getNearestAttackableNoCase(name: string, nameContains: boolean): Optional<NPC>;
```

```typescript
function getNearestBank(): Optional<NPC>;
```

```typescript
function getNearestInArea(id: number, x1: number, y1: number, x2: number, y2: number, plane: number): Optional<NPC>;
```

```typescript
function getNearestInArea(id: number, worldArea: WorldArea): Optional<NPC>;
```

```typescript
function getNearestNameContains(name: string, caseSensitive: boolean): Optional<NPC>;
```

```typescript
function getNearestNameContainsNoCase(name: string): Optional<NPC>;
```

```typescript
function getNearestNameMatches(pattern: string): Optional<NPC>;
```

```typescript
function getNearestNoCase(name: string, nameContains: boolean): Optional<NPC>;
```

```typescript
function getNearestToPoint(name: string, x: number, y: number, plane: number): Optional<NPC>;
```

```typescript
function getNearestWithAction(action: string): Optional<NPC>;
```

```typescript
function getNoCase(name: string): Optional<NPC>;
```

```typescript
function getNoCase(name: string, nameContains: boolean, nearest: boolean): Optional<NPC>;
```

```typescript
function getNpcName(npcId: number): string;
```

```typescript
function getWithAction(action: string): Optional<NPC>;
```

```typescript
function getWithAction(action: string, nearest: boolean): Optional<NPC>;
```

```typescript
function getWithAnyAction(): Optional<NPC>;
```

```typescript
function interactWith(id: number, actions: string): boolean;
```

```typescript
function interactWith(id: number, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWith(name: string, actions: string): boolean;
```

```typescript
function interactWith(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWith(npc: NPC, action: string): boolean;
```

```typescript
function interactWithAction(action: string): boolean;
```

```typescript
function interactWithAction(action: string, nearest: boolean): boolean;
```

```typescript
function interactWithCardinalNearestAction(action: string): boolean;
```

```typescript
function interactWithInArea(id: number, x1: number, y1: number, x2: number, y2: number, plane: number, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWithInArea(id: number, worldArea: WorldArea, nearest: boolean, actions: string): boolean;
```

```typescript
function interactWithInArea(npcIds: Collection<Integer>, worldArea: WorldArea, nearest: boolean, action: string): boolean;
```

```typescript
function interactWithNameContains(name: string, actions: string): boolean;
```

```typescript
function interactWithNameContainsNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNameMatches(pattern: string, action: string): boolean;
```

```typescript
function interactWithNameMatches(pattern: string, nearest: boolean, action: string): boolean;
```

```typescript
function interactWithNearest(id: number, action: string): boolean;
```

```typescript
function interactWithNearest(name: string, actions: string): boolean;
```

```typescript
function interactWithNearest(name: string, actions: string): boolean;
```

```typescript
function interactWithNearestAction(action: string): boolean;
```

```typescript
function interactWithNearestInArea(id: number, x1: number, y1: number, x2: number, y2: number, plane: number, actions: string): boolean;
```

```typescript
function interactWithNearestInArea(id: number, worldArea: WorldArea, actions: string): boolean;
```

```typescript
function interactWithNearestInArea(npcIds: Collection<Integer>, worldArea: WorldArea, action: string): boolean;
```

```typescript
function interactWithNearestNameContains(name: string, actions: string): boolean;
```

```typescript
function interactWithNearestNameContainsNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNearestNameMatches(pattern: string, action: string): boolean;
```

```typescript
function interactWithNearestNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithNoCase(name: string, actions: string): boolean;
```

```typescript
function interactWithinDistance(npcId: number, distance: number, actions: string): boolean;
```

```typescript
function isNpc(actor: Actor): boolean;
```

```typescript
function isWithinCardinalDistance(npc: NPC, distance: number): boolean;
```

```typescript
function isWithinDistance(npc: NPC, distance: number): boolean;
```

```typescript
function search(): NPCQuery;
```

```typescript
function search(filter: Predicate<NPC>): NPCQuery;
```

```typescript
function search(id: number): NPCQuery;
```

```typescript
function search(name: string): NPCQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): NPCQuery;
```

```typescript
function searchAttackable(id: number): NPCQuery;
```

```typescript
function searchAttackable(name: string): NPCQuery;
```

```typescript
function searchAttackable(name: string, nameContains: boolean, caseSensitive: boolean): NPCQuery;
```

```typescript
function searchAttackableNameContains(name: string): NPCQuery;
```

```typescript
function searchAttackableNameContains(name: string, caseSensitive: boolean): NPCQuery;
```

```typescript
function searchAttackableNameContainsNoCase(name: string): NPCQuery;
```

```typescript
function searchAttackableNoCase(name: string): NPCQuery;
```

```typescript
function searchAttackableNoCase(name: string, nameContains: boolean): NPCQuery;
```

```typescript
function searchInArea(id: number, x1: number, y1: number, x2: number, y2: number, plane: number): NPCQuery;
```

```typescript
function searchInArea(id: number, worldArea: WorldArea): NPCQuery;
```

```typescript
function searchInArea(name: string, worldArea: WorldArea): NPCQuery;
```

```typescript
function searchInRadius(npcId: number, radius: number): NPCQuery;
```

```typescript
function searchInRadius(npcId: number, center: WorldPoint, radius: number): NPCQuery;
```

```typescript
function searchInRadius(radius: number): NPCQuery;
```

```typescript
function searchInRadius(center: WorldPoint, radius: number): NPCQuery;
```

```typescript
function searchNameContains(name: string): NPCQuery;
```

```typescript
function searchNameContains(name: string, caseSensitive: boolean): NPCQuery;
```

```typescript
function searchNameContainsNoCase(name: string): NPCQuery;
```

```typescript
function searchNameMatches(pattern: string): NPCQuery;
```

```typescript
function searchNoCase(name: string): NPCQuery;
```

```typescript
function searchNoCase(name: string, nameContains: boolean): NPCQuery;
```

```typescript
function searchWithAction(action: string): NPCQuery;
```

```typescript
function talkTo(name: string): boolean;
```

```typescript
function talkTo(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): boolean;
```

```typescript
function talkTo(npc: NPC): boolean;
```

```typescript
function talkToNameMatches(pattern: string): boolean;
```

```typescript
function talkToNameMatches(pattern: string, nearest: boolean): boolean;
```

```typescript
function talkToNearest(name: string): boolean;
```

```typescript
function talkToNearestNameMatches(pattern: string): boolean;
```

