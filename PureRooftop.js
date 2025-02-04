
const CONFIG = {
    food: { label: "Food", value: "" },
    hp: { label: "Stop/Eat HP", value: 10 },
    alch: { label: "High Alch", value: "Rune *" },
    mog: { label: "Pick up Marks", value: true },
    pause: { label: "Pause", value: true }
}
config.setConfig(CONFIG)

class Course {
    name: string;
    regionIDs: number[];

    constructor(name: string, regionIDs: number[] = []) {
        this.name = name;
        this.regionIDs = regionIDs;
    }

    static getCourseNameByRegionID(id: number): string | null {
        for (const courseKey in Courses) {
            const course = Courses[courseKey];
            if (course.regionIDs.includes(id)) {
                return course.name;
            }
        }
        return null;
    }

    static getCourseNameFromMapRegions(mapRegions: number[]): string | null {
        for (const courseKey in Courses) {
            const course = Courses[courseKey];
            if (course.regionIDs.some(regionID => mapRegions.includes(regionID))) {
                return course.name;
            }
        }
        return null;
    }
}

const Courses: { [key: string]: Course } = {
    GNOME: new Course("Gnome Stronghold", [9781]),
    DRAYNOR: new Course("Draynor Village", [12338, 12339]),
    AL_KHARID: new Course("Al Kharid", [13105]),
    VARROCK: new Course("Varrock", [12853, 12572]),
    CANAFIS: new Course("Canafis", [13878]),
    APE_ATOLL: new Course("Ape Atoll", [11050, 10794]),
    FALADOR: new Course("Falador", [12084]),
    SEERS: new Course("Seers Village", [10806]),
    POLLNIVNEACH: new Course("Pollnivneach"),
    PRIFDDINAS: new Course("Prifddinas", [12895, 13151, 13152]),
    RELLEKKA: new Course("Rellekka", [10297, 10553]),
    ARDOUGNE: new Course("Ardougne", [10547])
};

class Obstacle {
    location: rl.coords.WorldArea
    obstacleId: number
    bankId?: number

    constructor(x1: number, y1: number, x2: number, y2: number, plane: number, obstacleId: number, bandId?: number) {
        this.location = api.location.worldAreaFromPoints(x1, y1, x2, y2, plane)
        this.obstacleId = obstacleId
        this.bankId = bandId
    }

    static getObstacle(worldPoint: rl.coords.WorldPoint) {
        for (const obstacleKey in Obstacles) {
            const obstacle = Obstacles[obstacleKey]
            if (obstacle.location.distanceTo(worldPoint) == 0) {
                return obstacle
            }
        }
    }
}

const Obstacles: { [key: string]: Obstacle } = {
    //TREE GNOME
    GNOME_LOG: new Obstacle(2470, 3435, 2489, 3447, 0, 23145),
    GNOME_NET: new Obstacle(2470, 3423, 2477, 3430, 0, 23134),
    GNOME_TREE: new Obstacle(2470, 3421, 2476, 3425, 1, 23559),
    GNOME_ROPE: new Obstacle(2469, 3416, 2479, 3423, 2, 23557),
    GNOME_TREE_TWO: new Obstacle(2482, 3416, 2489, 3423, 2, 23560),
    GNOME_NET_TWO: new Obstacle(2482, 3418, 2489, 3427, 0, 23135),
    GNOME_PIPE: new Obstacle(2482, 3427, 2489, 3433, 0, 23139),
    //DRAYNOR
    DRAY_WALL: new Obstacle(3082, 3238, 3105, 3293, 0, 11404, 10355),
    DRAY_TIGHTROPE: new Obstacle(3096, 3275, 3103, 3282, 3, 11405),
    DRAY_TIGHTROPE_TWO: new Obstacle(3086, 3271, 3093, 3279, 3, 11406),
    DRAY_NARROW_WALL: new Obstacle(3087, 3263, 3095, 3269, 3, 11430),
    DRAY_WALL_TWO: new Obstacle(3082, 3256, 3089, 3262, 3, 11630), //COULD CONFLICT WITH NEXT LINE
    DRAY_GAP: new Obstacle(3087, 3254, 3095, 3256, 3, 11631),
    DRAY_CRATE: new Obstacle(3095, 3255, 3102, 3262, 3, 11632),
    //ALKHARID
    ALK_ROUGHWALL: new Obstacle(3268, 3159, 3322, 3200, 0, 11633),
    ALK_TIGHTROPE: new Obstacle(3270, 3179, 3278, 3193, 3, 14398),
    ALK_CABLE: new Obstacle(3263, 3160, 3274, 3174, 3, 14402),
    ALK_ZIPLINE: new Obstacle(3282, 3159, 3303, 3176, 3, 14403),
    ALK_TROPICAL_TREE: new Obstacle(3312, 3159, 3319, 3166, 1, 14404),
    ALK_ROOF_TOP_BEAMS: new Obstacle(3311, 3172, 3319, 3180, 2, 11634),
    ALK_TIGHTROPE_TWO: new Obstacle(3311, 3180, 3319, 3187, 3, 14409),
    ALK_GAP: new Obstacle(3296, 3184, 3306, 3194, 3, 14399),
    //VARROCK
    COURSE_GROUND: new Obstacle(3184, 3386, 3258, 3428, 0, 14412, 10583),
    ROOFTOP_ONE: new Obstacle(3213, 3409, 3220, 3420, 3, 14413),
    ROOFTOP_TWO: new Obstacle(3200, 3412, 3209, 3420, 3, 14414),
    CROSSWALK: new Obstacle(3192, 3415, 3198, 3417, 1, 14832),
    ROOFTOP_THREE: new Obstacle(3191, 3401, 3198, 3407, 3, 14833),
    ROOFTOP_FOUR: new Obstacle(3181, 3393, 3209, 3401, 3, 14834),
    ROOFTOP_FIVE: new Obstacle(3217, 3392, 3233, 3404, 3, 14835),
    ROOFTOP_SIX: new Obstacle(3235, 3402, 3240, 3409, 3, 14836),
    ROOFTOP_SEVEN: new Obstacle(3235, 3410, 3240, 3416, 3, 14841),
    //Canifis
    CAN_GROUND: new Obstacle(3459, 3464, 3519, 3514, 0, 14843, 24347),
    CAN_ROOFTOP_ONE: new Obstacle(3504, 3491, 3512, 3499, 2, 14844),
    CAN_ROOFTOP_TWO: new Obstacle(3495, 3503, 3505, 3508, 2, 14845),
    CAN_ROOFTOP_THREE: new Obstacle(3484, 3498, 3494, 3506, 2, 14848),
    CAN_ROOFTOP_FOUR: new Obstacle(3474, 3491, 3481, 3501, 3, 14846),
    CAN_ROOFTOP_FIVE: new Obstacle(3477, 3481, 3485, 3488, 2, 14894),
    CAN_ROOFTOP_SIX: new Obstacle(3488, 3468, 3505, 3480, 3, 14847),
    CAN_ROOFTOP_SEVEN: new Obstacle(3508, 3474, 3517, 3484, 2, 14897),
    //APE ATOLL
    APE_STEPSTONE: new Obstacle(2754, 2741, 2784, 2751, 0, 15412),
    APE_TROPTREE1: new Obstacle(2753, 2742, 2751, 2739, 0, 15414),
    APE_MONKEYBARS: new Obstacle(2753, 2742, 2752, 2741, 2, 15417),
    APE_SKULLSLOPE: new Obstacle(2747, 2741, 2746, 2741, 0, 1747),
    APE_ROPE: new Obstacle(2735, 2726, 2754, 2742, 0, 15487),
    APE_TROPTREE2: new Obstacle(2755, 2726, 2760, 2737, 0, 16062),
    //FALADOR
    FAL_GROUND: new Obstacle(3008, 3328, 3071, 3391, 0, 14898, 24101),
    FAL_ROOFTOP_ONE: new Obstacle(3034, 3342, 3040, 3347, 3, 14899),
    FAL_ROOFTOP_TWO: new Obstacle(3043, 3341, 3051, 3350, 3, 14901),
    FAL_ROOFTOP_THREE: new Obstacle(3047, 3356, 3051, 3359, 3, 14903),
    FAL_ROOFTOP_FOUR: new Obstacle(3044, 3360, 3049, 3367, 3, 14904),
    FAL_ROOFTOP_FIVE: new Obstacle(3033, 3360, 3042, 3364, 3, 14905),
    FAL_ROOFTOP_SIX: new Obstacle(3025, 3352, 3029, 3355, 3, 14911),
    FAL_ROOFTOP_SEVEN: new Obstacle(3008, 3352, 3021, 3358, 3, 14919),
    FAL_ROOFTOP_EIGHT: new Obstacle(3015, 3343, 3022, 3350, 3, 14920),
    FAL_ROOFTOP_NINE: new Obstacle(3010, 3343, 3015, 3347, 3, 14921),
    FAL_ROOFTOP_TEN: new Obstacle(3008, 3335, 3015, 3343, 3, 14922),
    FAL_ROOFTOP_ELEVEN: new Obstacle(2999, 3342, 3005, 3348, 3, 14923),
    FAL_ROOFTOP_TWELVE: new Obstacle(2992, 3333, 2998, 3341, 3, 14924),
    FAL_ROOFTOP_THIRTEEN: new Obstacle(2993, 3329, 2997, 3333, 3, 14925),
    //REVENTUS
    REV_GROUND: new Obstacle(2918, 3644, 2955, 3672, 0, 14932, 24041),
    REV_NET: new Obstacle(2909, 3661, 2914, 3670, 3, 14935),
    REV_PLANK: new Obstacle(2912, 3672, 2922, 3681, 3, 14938),
    REV_GAP: new Obstacle(2918, 3666, 2926, 3668, 3, 14936),
    REV_GAP_TWO: new Obstacle(2907, 3657, 2915, 3659, 3, 14937),
    REV_GAP_THREE: new Obstacle(2902, 3656, 2907, 3659, 3, 14939),
    REV_GAP_FOUR: new Obstacle(2906, 3648, 2908, 3652, 3, 14940),
    REV_GAP_FIVE: new Obstacle(2916, 3663, 2919, 3667, 3, 14941),
    REV_MUD: new Obstacle(2915, 3649, 2918, 3654, 3, 14942),
    REV_CABLE: new Obstacle(2908, 3648, 2910, 3652, 3, 14944),
    REV_CABLE_TWO: new Obstacle(2920, 3661, 2925, 3665, 3, 14943)
}

class Portal {
    id: number
    varbitValue: number

    constructor(id: number, varbitValue: number) {
        this.id = id
        this.varbitValue = varbitValue
    }

    static getPortal(varbitValue: number) {
        for (const portalKey in Portals) {
            const portal = Portals[portalKey]
            if (portal.varbitValue == varbitValue) {
                return portal
            }
        }
    }
}

const Portals: { [key: string]: Portal } = {
    PORTAL_ONE: new Portal(36241, 1),
    PORTAL_TWO: new Portal(36242, 2),
    PORTAL_THREE: new Portal(36243, 3),
    PORTAL_FOUR: new Portal(36244, 4),
    PORTAL_FIVE: new Portal(36245, 5),
    PORTAL_SIX: new Portal(36246, 6)
}

enum State {
    PAUSED,
    ANIMATING,
    CAST_CAMELOT_TELEPORT,
    FIND_OBSTACLE,
    HANDLE_BREAK,
    MARK_OF_GRACE,
    MOVING,
    PRIFF_PORTAL,
    RESTOCK_ITEMS,
    TIMEOUT,
    EAT_SUMMER_PIE,
    OUT_OF_SUMMER_PIES,
    EAT_FOOD,
    ENABLE_RUN,
    HIGH_ALCH,
    BANK_PIN_WAIT
}

const REGION_IDS = [9781, 12853, 12597, 12084, 12339, 12338, 10806, 10297, 10553, 13358, 13878, 10547, 13105, 9012, 9013, 12895, 13151, 13152, 11050, 10794]
let highAlchTick = client.getTickCount()
let hasAlchItems = true
let mog: rl.TileItem
let mogTile: rl.Tile
let mogSpawnCount = 0
let obstacle: Obstacle
let state: State

function onGameTick(event: rl.events.GameTick) {
    const player = api.player.get()
    if (!player || !inRooftopRegion()) return
    state = getState()
    switch (state) {
        case State.PAUSED:
        case State.MOVING:
            // case State.ANIMATING:
            return
        case State.EAT_FOOD:
            return api.inventory.useItem(config.getString("food"), "Eat")
        case State.ENABLE_RUN:
            return api.player.enableRun()
        case State.HIGH_ALCH:
            return highAlch()
        case State.RESTOCK_ITEMS:
            return restockItems()
        case State.MARK_OF_GRACE:
            return api.groundItems.lootItem(mogTile.getWorldLocation(), mog)
        case State.FIND_OBSTACLE:
            return findObstacle()
    }
}

function getState() {
    if (config.getBoolean("pause")) {
        return State.PAUSED
    }

    if (config.getString("food") && api.player.getBoostedSkillLevel("Hitpoints") < config.getNumber("hp")) {
        if (api.inventory.hasItem(config.getString("food"))) {
            return State.EAT_FOOD
        }
        return State.RESTOCK_ITEMS
    }

    if (api.player.isRunOff() && api.player.runEnergy() >= 50) {
        return State.ENABLE_RUN
    }

    if (shouldAlch()) {
        return State.HIGH_ALCH;
    }

    // TODO Support Camelot Teleport
    // if (shouldCastTeleport()) {
    //     return State.CAST_CAMELOT_TELEPORT;
    // }

    if (api.player.isMoving()) {
        return State.MOVING
    }

    obstacle = Obstacle.getObstacle(api.player.getLocation())
    if (!obstacle) {
        return State.MOVING
    }

    if (obstacle.bankId > 0 && shouldRestock()) {
        if (api.objects.get(obstacle.bankId).isPresent()) {
            return State.RESTOCK_ITEMS
        }
    }

    if (mog && mogTile && config.getBoolean("mog") && (!api.inventory.isFull() || api.inventory.getItemAmount(11849))) {
        if (obstacle.location.distanceTo(mogTile.getWorldLocation()) == 0) {
            // TODO handle stacking for Ardougne
            return State.MARK_OF_GRACE
        }
    }

    // TODO handle Priff

    return State.FIND_OBSTACLE
}

function shouldAlch() {
    return hasAlchItems && client.getTickCount() - highAlchTick >= 5
}

function shouldRestock() {
    if (!config.getString("food")) return false;
    return !api.inventory.hasItem(config.getString("food"))
}

function inRooftopRegion() {
    return REGION_IDS.indexOf(api.player.getLocation().getRegionID()) > -1
}

function onItemSpawned(event: rl.events.ItemSpawned) {
    if (!inRooftopRegion()) return

    const item = event.getItem()
    const tile = event.getTile()

    if (item.getId() != 11849) return
    mog = item
    mogTile = tile
    mogSpawnCount++
}

function highAlch() {
    const alchItems = config.getString("alch").split(",").map(pattern => pattern.trim())
    if (alchItems.length) {
        api.inventory.search().matchesWildCardNoCase(alchItems[0]).first().ifPresentOrElse(item => {
            api.spells.highAlch(item)
        }, () => {
            hasAlchItems = false
        })
    }
}

function restockItems() {
    if (api.bank.isOpen()) {
        api.bank.depositAll("Pie dish")
        api.bank.depositAll("Vial")
        if (!api.inventory.hasItem(config.getString("food"))) {
            if (!api.bank.withdrawItem(config.getString("food"), 14)) {
                // TODO handle out of food
            }
            // TODO handle summer pies
        }
        return
    }
    api.bank.useNearest()
}

function findObstacle() {
    return api.player.isInteracting() || api.objects.interactWithNearest(obstacle.obstacleId, 1)
}

function onItemDespawned(event: rl.events.ItemDespawned) {
    if (!inRooftopRegion()) return
    const item = event.getItem()

    if (item.getId() != 11849) return

    mog = null
    mogTile = null
}

function render() {
    if (state) {
        ui.addText(State[state], "#4ade80")
    }
}
