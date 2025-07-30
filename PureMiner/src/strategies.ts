import cfg from "./config";

interface Strategy {
  text: string;
  validate(): boolean;
  execute(): boolean;
}

export class DepositStrategy implements Strategy {
  text = `Depositing ${cfg.ore()}`;
  validate(): boolean {
    return api.bank.isOpen() && api.inventory.hasItemNameContains(cfg.ore());
  }
  execute(): boolean {
    return api.bank.depositAllNameContains(cfg.ore());
  }
}

export class BankStrategy implements Strategy {
  text = "Walking to bank";
  validate(): boolean {
    return cfg.bank() && api.inventory.isFull();
  }
  execute(): boolean {
    return api.bank.useNearest(true);
  }
}

export class DropStrategy implements Strategy {
  text = `Dropping ${cfg.ore()}`;
  dropping = false;
  validate(): boolean {
    this.dropping = this.dropping
      ? !api.inventory.isEmpty()
      : api.inventory.isFull();
    return this.dropping;
  }
  execute(): boolean {
    return api.inventory.dropAllNameContains(cfg.ore());
  }
}

export class MineStrategy implements Strategy {
  text = `Mining ${cfg.ore()}`;
  validate(): boolean {
    return !api.objects
      .search(cfg.ore(), true, false)
      .withinDistance(10)
      .empty();
  }
  execute(): boolean {
    return api.objects.interactWithNearestNameContains(cfg.ore(), "Mine");
  }
}

export class BreakStrategy implements Strategy {
  text = "Taking break";
  validate(): boolean {
    return breakHandler.shouldBreak();
  }
  execute(): boolean {
    breakHandler.startBreak();
    return true;
  }
}

export class WalkMineStrategy implements Strategy {
  text = "Walking to mine";
  startSpot = api.player.getLocation();
  validate(): boolean {
    return !api.player.inWorldArea(this.startSpot, 3);
  }
  execute(): boolean {
    api.pathing.webwalkTo(this.startSpot, 3);
    return true;
  }
}
