import { createTheme } from "@shopify/restyle";

import borderRadii from "./borderRadii";
import colors from "./colors";
import spacing from "./spacing";
import textVariants from "./textVariants";

const theme = createTheme({
  colors,
  spacing,
  borderRadii,
  textVariants,
  breakpoints: {
    phone: 0,
    desktop: 1224,
  },
});

export type Theme = typeof theme;
export { default as createStyleHook } from "./createStyleHook";
export { theme };
