import { AppPaletteKey, AppPaletteProperties, AppPaletteObject } from "./types";

class AppPaletteUtils {
  private storageKey: string;
  private keys: AppPaletteKey[];
  private palettes: AppPaletteObject[];

  public constructor(
    storageKey: string,
    keys: AppPaletteKey[],
    palettes: AppPaletteObject[]
  ) {
    this.keys = keys;
    this.storageKey = storageKey;
    this.palettes = palettes;
  }

  public getBaseColor(key: AppPaletteKey): "light" | "dark" {
    const basePalette = key === "dark" ? "dark" : "light";
    return basePalette;
  }

  public getKeys(): AppPaletteKey[] {
    return this.keys;
  }

  public getArrayOfPalettes(): AppPaletteObject[] {
    return this.palettes;
  }

  public getObjectOfPalettes(): object {
    let object = {};
    this.palettes.forEach((palette) => {
      object[palette.key] = palette.properties;
    });
    return object;
  }

  private setBodyAttribute(key: AppPaletteKey) {
    const attribute = "data-is-dark-palette";
    const value = key === "dark";
    document.body.setAttribute(attribute, JSON.stringify(value));
  }

  private setCSSRootVariables(appPalette: AppPaletteProperties) {
    const { style } = document.querySelector(":root") as any;
    style.setProperty("--app-palette-light", appPalette.light);
    style.setProperty("--app-palette-main", appPalette.main);
    style.setProperty("--app-palette-dark", appPalette.dark);
    style.setProperty("--app-palette-contrast-text", appPalette.contrastText);
  }

  private storeKey(key: AppPaletteKey) {
    localStorage && localStorage.setItem(this.storageKey, key);
  }

  public getStoredKey(): AppPaletteKey {
    try {
      const storedAppPalette = localStorage.getItem(
        this.storageKey
      ) as AppPaletteKey;
      return storedAppPalette || "blue";
    } catch (error) {
      return "blue";
    }
  }

  public applyKey(key: AppPaletteKey) {
    const appPalettes = this.getObjectOfPalettes();
    this.storeKey(key);
    this.setBodyAttribute(key);
    this.setCSSRootVariables(appPalettes[key]);
  }
}

const storageKey = "stored-app-palette-key";
const palettes: AppPaletteObject[] = [
  {
    key: "dark",
    properties: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#bdbdbd",
    },
  },
  {
    key: "red",
    properties: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
  },
  {
    key: "maroon",
    properties: {
      light: "#b73d2a",
      main: "#800000",
      dark: "#4f0000",
      contrastText: "#ffffff",
    },
  },
  {
    key: "blue",
    properties: {
      light: "#5472d3",
      main: "#0d47a1",
      dark: "#002171",
      contrastText: "#ffffff",
    },
  },
  {
    key: "indigo",
    properties: {
      light: "#534bae",
      main: "#1a237e",
      dark: "#000051",
      contrastText: "#ffffff",
    },
  },
  {
    key: "green",
    properties: {
      light: "#60ad5e",
      main: "#2e7d32",
      dark: "#005005",
      contrastText: "#ffffff",
    },
  },
  {
    key: "lime",
    properties: {
      light: "#b4a647",
      main: "#827717",
      dark: "#524c00",
      contrastText: "#ffffff",
    },
  },
  {
    key: "brown",
    properties: {
      light: "#956e4a",
      main: "#654321",
      dark: "#391c00",
      contrastText: "#ffffff",
    },
  },
  {
    key: "yellow",
    properties: {
      light: "#fff263",
      main: "#fbc02d",
      dark: "#c49000",
      contrastText: "#000000",
    },
  },
  {
    key: "orange",
    properties: {
      light: "#ff7543",
      main: "#d84315",
      dark: "#9f0000",
      contrastText: "#ffffff",
    },
  },
  {
    key: "purple",
    properties: {
      light: "#9c4dcc",
      main: "#6a1b9a",
      dark: "#38006b",
      contrastText: "#ffffff",
    },
  },
  {
    key: "pink",
    properties: {
      light: "#e35183",
      main: "#ad1457",
      dark: "#78002e",
      contrastText: "#ffffff",
    },
  },
];
const keys: AppPaletteKey[] = palettes.map((palette) => palette.key);

export default new AppPaletteUtils(storageKey, keys, palettes);
