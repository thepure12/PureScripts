# bank

```typescript
function bankFullInventory(): boolean;
```

```typescript
function bankItems(): boolean;
```

```typescript
function bankItems(whenFull: boolean): boolean;
```

```typescript
function bankItems(itemId: number): boolean;
```

```typescript
function bankItems(): boolean;
```

```typescript
function bankItems(name: string): boolean;
```

```typescript
function bankItems(): boolean;
```

```typescript
function clearMemory(): boolean;
```

```typescript
function close(): boolean;
```

```typescript
function collectBank(): boolean;
```

```typescript
function collectToBank(): boolean;
```

```typescript
function collectToInventory(): boolean;
```

```typescript
function deposit(name: string, amount: number): boolean;
```

```typescript
function deposit(name: string, nameContains: boolean, caseSensitive: boolean, amount: number): boolean;
```

```typescript
function deposit(item: Widget, amount: number): boolean;
```

```typescript
function depositAll(): boolean;
```

```typescript
function depositAll(name: string): boolean;
```

```typescript
function depositAll(itemId: number): boolean;
```

```typescript
function depositAllExcept(id: number): boolean;
```

```typescript
function depositAllExcept(itemIds: Collection<Integer>): boolean;
```

```typescript
function depositAllExcept(): boolean;
```

```typescript
function depositAllNameContains(nameContains: string): boolean;
```

```typescript
function depositLootingBagItems(): boolean;
```

```typescript
function getBank(bankName: string): Bank;
```

```typescript
function getItem(itemId: number): Optional<Widget>;
```

```typescript
function getItem(name: string, nameContains: boolean, caseSensitive: boolean): Optional<Widget>;
```

```typescript
function getItemAmount(itemId: number): number;
```

```typescript
function getItemAmount(name: string): number;
```

```typescript
function getItemAmount(name: string, nameContains: boolean, caseSensitive: boolean): number;
```

```typescript
function getItemFromMemory(itemId: number): Optional<Item>;
```

```typescript
function getItemFromMemory(name: string): Optional<Item>;
```

```typescript
function getItemFromMemory(name: string, nameContains: boolean, caseSensitive: boolean): Optional<Item>;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasAnyItems(nameContains: boolean, caseSensitive: boolean, itemNames: Collection<String>): boolean;
```

```typescript
function hasBeenOpened(): boolean;
```

```typescript
function hasItem(itemId: number): boolean;
```

```typescript
function hasItem(name: string): boolean;
```

```typescript
function hasItem(name: string, nameContains: boolean, caseSensitive: boolean): boolean;
```

```typescript
function hasItemAmount(name: string, amount: number): boolean;
```

```typescript
function hasItemAmount(name: string, nameContains: boolean, caseSensitive: boolean, amount: number): boolean;
```

```typescript
function hasItemAmountGreaterThan(name: string, amount: number): boolean;
```

```typescript
function hasItemAmountGreaterThan(name: string, nameContains: boolean, caseSensitive: boolean, amount: number): boolean;
```

```typescript
function hasItemAmountLessThan(name: string, amount: number): boolean;
```

```typescript
function hasItemAmountLessThan(name: string, nameContains: boolean, caseSensitive: boolean, amount: number): boolean;
```

```typescript
function hasItemOtherThan(itemId: number): boolean;
```

```typescript
function hasOnlyItem(itemId: number): boolean;
```

```typescript
function inBankArea(bank: Bank): boolean;
```

```typescript
function inventorySearch(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function isCollectionBoxOpen(): boolean;
```

```typescript
function isNearBank(name: string): boolean;
```

```typescript
function isNearBank(): boolean;
```

```typescript
function isOpen(): boolean;
```

```typescript
function lootingBagHasItems(): boolean;
```

```typescript
function onGameStateChanged(event: GameStateChanged): void;
```

```typescript
function onItemContainerChanged(event: ItemContainerChanged): void;
```

```typescript
function search(itemId: number): ItemQuery;
```

```typescript
function search(name: string, nameContains: boolean, caseSensitive: boolean): ItemQuery;
```

```typescript
function search(): ItemQuery;
```

```typescript
function searchForBank(name: string): BankQuery;
```

```typescript
function searchForBank(name: string, nameContains: boolean, caseSensitive: boolean): BankQuery;
```

```typescript
function searchForBank(): BankQuery;
```

```typescript
function searchInArea(worldPoint: WorldPoint, radius: number): BankQuery;
```

```typescript
function searchInArea(x: number, y: number, radius: number): BankQuery;
```

```typescript
function searchInArea(x: number, y: number, plane: number, radius: number): BankQuery;
```

```typescript
function searchInArea(x: number, y: number, width: number, height: number, plane: number): BankQuery;
```

```typescript
function searchInArea(worldArea: WorldArea): BankQuery;
```

```typescript
function setFirstMemory(): boolean;
```

```typescript
function setMemory(): boolean;
```

```typescript
function unnoteFirst(): boolean;
```

```typescript
function useBank(name: string): boolean;
```

```typescript
function useBank(name: string, nameContains: boolean, caseSensitive: boolean, nearest: boolean): boolean;
```

```typescript
function useBank(): boolean;
```

```typescript
function useInArea(worldArea: WorldArea, nearest: boolean): boolean;
```

```typescript
function useNearest(name: string): boolean;
```

```typescript
function useNearest(): boolean;
```

```typescript
function useNearest(webwalk: boolean): boolean;
```

```typescript
function useNearestBank(): boolean;
```

```typescript
function useNearestInArea(x: number, y: number, width: number, height: number, plane: number): boolean;
```

```typescript
function useNearestInAreaFromPoints(x1: number, y1: number, x2: number, y2: number): boolean;
```

```typescript
function useNearestInAreaFromPoints(x1: number, y1: number, x2: number, y2: number, plane: number): boolean;
```

```typescript
function useNearestToPoint(x: number, y: number): boolean;
```

```typescript
function useNearestToPoint(x: number, y: number, plane: number): boolean;
```

```typescript
function useNearestToPoint(worldPoint: WorldPoint): boolean;
```

```typescript
function webwalk(bank: Bank): void;
```

```typescript
function webwalkAlKharid(): void;
```

```typescript
function webwalkArceuus(): void;
```

```typescript
function webwalkArdougneNorth(): void;
```

```typescript
function webwalkArdougneSouth(): void;
```

```typescript
function webwalkBarbarianOutpost(): void;
```

```typescript
function webwalkBlastFurnaceBank(): void;
```

```typescript
function webwalkBlastMine(): void;
```

```typescript
function webwalkBurghDeRott(): void;
```

```typescript
function webwalkCamTorum(): void;
```

```typescript
function webwalkCamelot(): void;
```

```typescript
function webwalkCamodzaal(): void;
```

```typescript
function webwalkCanifis(): void;
```

```typescript
function webwalkCastleWars(): void;
```

```typescript
function webwalkCatherby(): void;
```

```typescript
function webwalkCharcoalBurners(): void;
```

```typescript
function webwalkCooksGuild(): void;
```

```typescript
function webwalkCraftingGuild(): void;
```

```typescript
function webwalkDarkmeyer(): void;
```

```typescript
function webwalkDihnBank(): void;
```

```typescript
function webwalkDraynor(): void;
```

```typescript
function webwalkDraynorVillage(): void;
```

```typescript
function webwalkDuelArena(): void;
```

```typescript
function webwalkDwarfMineBank(): void;
```

```typescript
function webwalkEastArdougneNorth(): void;
```

```typescript
function webwalkEastArdougneSouth(): void;
```

```typescript
function webwalkEdgeville(): void;
```

```typescript
function webwalkFaladorEast(): void;
```

```typescript
function webwalkFaladorWest(): void;
```

```typescript
function webwalkFarmingGuildCenter(): void;
```

```typescript
function webwalkFeroxEnclave(): void;
```

```typescript
function webwalkFishingGuild(): void;
```

```typescript
function webwalkFossilIsland(): void;
```

```typescript
function webwalkFossilIslandWreck(): void;
```

```typescript
function webwalkGnomeBank(): void;
```

```typescript
function webwalkGnomeTreeBankSouth(): void;
```

```typescript
function webwalkGnomeTreeBankWest(): void;
```

```typescript
function webwalkGrandExchange(): void;
```

```typescript
function webwalkGreatKourendCastle(): void;
```

```typescript
function webwalkHallowedSepulchre(): void;
```

```typescript
function webwalkHosidius(): void;
```

```typescript
function webwalkHosidiusRange(): void;
```

```typescript
function webwalkHuntersGuild(): void;
```

```typescript
function webwalkIsleOfSouls(): void;
```

```typescript
function webwalkJatizso(): void;
```

```typescript
function webwalkLandsEnd(): void;
```

```typescript
function webwalkLegendsGuild(): void;
```

```typescript
function webwalkLovakengj(): void;
```

```typescript
function webwalkLumbridgeBasement(): void;
```

```typescript
function webwalkLumbridgeTop(): void;
```

```typescript
function webwalkLunarIsle(): void;
```

```typescript
function webwalkMageTrainingArena(): void;
```

```typescript
function webwalkMiningGuild(): void;
```

```typescript
function webwalkMiningGuildBank(): void;
```

```typescript
function webwalkMorUlRek(): void;
```

```typescript
function webwalkMotherload(): void;
```

```typescript
function webwalkMountKaruulm(): void;
```

```typescript
function webwalkNardah(): void;
```

```typescript
function webwalkNearest(): void;
```

```typescript
function webwalkNeitiznot(): void;
```

```typescript
function webwalkPestControl(): void;
```

```typescript
function webwalkPortKhazard(): void;
```

```typescript
function webwalkPortPiscarilius(): void;
```

```typescript
function webwalkPrifddinas(): void;
```

```typescript
function webwalkRoguesDenChest(): void;
```

```typescript
function webwalkRoguesDenEmeraldBenedict(): void;
```

```typescript
function webwalkRuinsOfUnkah(): void;
```

```typescript
function webwalkSeersVillage(): void;
```

```typescript
function webwalkShantayPass(): void;
```

```typescript
function webwalkShayzienBank(): void;
```

```typescript
function webwalkShayzienChest(): void;
```

```typescript
function webwalkShiloVillage(): void;
```

```typescript
function webwalkSophanem(): void;
```

```typescript
function webwalkSulphurMine(): void;
```

```typescript
function webwalkTreeGnomeStrongholdNieve(): void;
```

```typescript
function webwalkTzHaar(): void;
```

```typescript
function webwalkVarlamoreEast(): void;
```

```typescript
function webwalkVarlamoreWest(): void;
```

```typescript
function webwalkVarrockEast(): void;
```

```typescript
function webwalkVarrockWest(): void;
```

```typescript
function webwalkVerSinhaza(): void;
```

```typescript
function webwalkVinery(): void;
```

```typescript
function webwalkVineryBank(): void;
```

```typescript
function webwalkVolcanoBank(): void;
```

```typescript
function webwalkWarriorsGuild(): void;
```

```typescript
function webwalkWintertodt(): void;
```

```typescript
function webwalkWoodcuttingGuild(): void;
```

```typescript
function webwalkYanille(): void;
```

```typescript
function webwalkZanaris(): void;
```

```typescript
function webwalkZeahSandBank(): void;
```

```typescript
function withdrawAllOfAny(): boolean;
```

```typescript
function withdrawAllOfAny(itemIds: Collection<Integer>): boolean;
```

```typescript
function withdrawAny(): boolean;
```

```typescript
function withdrawAny(amount: number): boolean;
```

```typescript
function withdrawAny(itemIds: Collection<Integer>): boolean;
```

```typescript
function withdrawAny(amount: number, itemIds: Collection<Integer>): boolean;
```

```typescript
function withdrawItem(id: number): boolean;
```

```typescript
function withdrawItem(id: number, amount: number): boolean;
```

```typescript
function withdrawItem(name: string): boolean;
```

```typescript
function withdrawItem(name: string, amount: number): boolean;
```

```typescript
function withdrawItem(name: string, nameContains: boolean, caseSensitive: boolean, amount: number): boolean;
```

```typescript
function withdrawItem(itemId: number, amount: number, openBank: boolean, webwalk: boolean): boolean;
```

```typescript
function withdrawNameContains(nameContains: string): boolean;
```

```typescript
function withdrawNameContains(nameContains: string, amount: number): boolean;
```

```typescript
function withdrawNameContainsNoCase(name: string): boolean;
```

```typescript
function withdrawNameContainsNoCase(name: string, amount: number): boolean;
```

```typescript
function withdrawNoCase(name: string): boolean;
```

```typescript
function withdrawNoCase(name: string, amount: number): boolean;
```

```typescript
function withdrawOrBuy(itemId: number, amount: number, percentOver: number): boolean;
```

