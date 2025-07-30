const defaultConfig: Config = {
  paused: { label: "Pause", value: true },
  ore: {
    label: "Ore",
    value: "Copper",
    options: ["Copper", "Tin", "Iron", "Coal", "Mithril", "Adamant", "Runite"],
  },
  bank: { label: "Bank Ore", value: false },
  takeBreaks: { label: "Take Breaks", value: false },
  debug: { label: "Debug", value: false },
};

config.setConfig(defaultConfig);

export default {
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
  },
};
