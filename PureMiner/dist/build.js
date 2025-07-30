var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// workspace/PureScripts/PureMiner/src/config.ts
var defaultConfig = {
  paused: { label: "Pause", value: true },
  ore: {
    label: "Ore",
    value: "Copper",
    options: ["Copper", "Tin", "Iron", "Coal", "Mithril", "Adamant", "Runite"]
  },
  bank: { label: "Bank Ore", value: false },
  takeBreaks: { label: "Take Breaks", value: false },
  debug: { label: "Debug", value: false }
};
config.setConfig(defaultConfig);
var config_default = {
  paused() {
    return config.getBoolean("paused");
  },
  ore() {
    return config.getString("ore");
  },
  bank() {
    return config.getBoolean("bank");
  },
  takeBreaks() {
    return config.getBoolean("takeBreaks");
  },
  debug() {
    return config.getBoolean("debug");
  }
};

// workspace/PureScripts/PureMiner/src/strategies.ts
var DepositStrategy = class {
  constructor() {
    __publicField(this, "text", `Depositing ${config_default.ore()}`);
  }
  validate() {
    return api.bank.isOpen() && api.inventory.hasItemNameContains(config_default.ore());
  }
  execute() {
    return api.bank.depositAllNameContains(config_default.ore());
  }
};
var BankStrategy = class {
  constructor() {
    __publicField(this, "text", "Walking to bank");
  }
  validate() {
    return config_default.bank() && api.inventory.isFull();
  }
  execute() {
    return api.bank.useNearest(true);
  }
};
var DropStrategy = class {
  constructor() {
    __publicField(this, "text", `Dropping ${config_default.ore()}`);
    __publicField(this, "dropping", false);
  }
  validate() {
    this.dropping = this.dropping ? !api.inventory.isEmpty() : api.inventory.isFull();
    return this.dropping;
  }
  execute() {
    return api.inventory.dropAllNameContains(config_default.ore());
  }
};
var MineStrategy = class {
  constructor() {
    __publicField(this, "text", `Mining ${config_default.ore()}`);
  }
  validate() {
    return !api.objects.search(config_default.ore(), true, false).withinDistance(10).empty();
  }
  execute() {
    return api.objects.interactWithNearestNameContains(config_default.ore(), "Mine");
  }
};
var BreakStrategy = class {
  constructor() {
    __publicField(this, "text", "Taking break");
  }
  validate() {
    return breakHandler.shouldBreak();
  }
  execute() {
    breakHandler.startBreak();
    return true;
  }
};
var WalkMineStrategy = class {
  constructor() {
    __publicField(this, "text", "Walking to mine");
    __publicField(this, "startSpot", api.player.getLocation());
  }
  validate() {
    return !api.player.inWorldArea(this.startSpot, 3);
  }
  execute() {
    api.pathing.webwalkTo(this.startSpot, 3);
    return true;
  }
};

// workspace/PureScripts/PureMiner/src/index.ts
var stateText = "Loading";
var startSpot = api.player.getLocation();
var strategies = [
  new DepositStrategy(),
  new BankStrategy(),
  new DropStrategy(),
  new MineStrategy(),
  new BreakStrategy(),
  new WalkMineStrategy()
];
breakHandler.enable();
var loaded = true;
function loop() {
  if (!loaded) return;
  if (config_default.debug()) log.setLogLevel(log.DEBUG);
  else log.setLogLevel(log.INFO);
  if (config_default.takeBreaks() != breakHandler.isEnabled())
    breakHandler.setEnabled(config_default.takeBreaks());
  if (config_default.paused()) {
    stateText = "Paused";
    return;
  }
  if (api.player.isAnimating() || api.player.isMoving()) {
    return;
  }
  for (const strategy of strategies) {
    if (strategy.validate()) {
      stateText = strategy.text;
      return strategy.execute();
    }
  }
  stateText = "Stuck";
}
function render() {
  if (!loaded) return;
  ui.addText(stateText);
  if (config_default.debug()) {
    overlay.drawTileWithText(startSpot, "Start spot");
    overlay.drawBox(startSpot, 3);
  }
}
