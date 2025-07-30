import cfg from "./config";
import {
  BankStrategy,
  BreakStrategy,
  DepositStrategy,
  DropStrategy,
  MineStrategy,
  WalkMineStrategy,
} from "./strategies";

let stateText = "Loading";
let startSpot = api.player.getLocation();
const strategies = [
  new DepositStrategy(),
  new BankStrategy(),
  new DropStrategy(),
  new MineStrategy(),
  new BreakStrategy(),
  new WalkMineStrategy(),
];
breakHandler.enable();
const loaded = true;

function loop() {
  if (!loaded) return;
  if (cfg.debug()) log.setLogLevel(log.DEBUG);
  else log.setLogLevel(log.INFO);
  if (cfg.takeBreaks() != breakHandler.isEnabled())
    breakHandler.setEnabled(cfg.takeBreaks());
  if (cfg.paused()) {
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
  if (cfg.debug()) {
    overlay.drawTileWithText(startSpot, "Start spot");
    overlay.drawBox(startSpot, 3);
  }
}
