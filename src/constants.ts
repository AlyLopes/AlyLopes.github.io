export const MAX_ICON_SIZE = 250;
export const MAX_PAGE_WIDTH = 1300;

export const APP_STATUS = {
  LOADING: "LOADING",
  READY: "READY",
} as const;

export const APP_FONT_NAMES = {
  ChakraPetchLight: "ChakraPetchLight",
  MooliRegular: "MooliRegular",
  VidaLokaRegular: "VidaLokaRegular",
};

export const APP_FONTS = {
  [APP_FONT_NAMES.ChakraPetchLight]: require("../assets/fonts/ChakraPetch-Light.ttf"),
  [APP_FONT_NAMES.MooliRegular]: require("../assets/fonts/Mooli-Regular.ttf"),
  [APP_FONT_NAMES.VidaLokaRegular]: require("../assets/fonts/Vidaloka-Regular.ttf"),
};
