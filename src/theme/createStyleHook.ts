import { useTheme } from "@shopify/restyle";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

import type { Theme } from "../theme";

type AllowedStyles = { [P: string]: ViewStyle | TextStyle | ImageStyle };

/**
 * Adhoc function to create style sheet object as a hook
 * @param styles
 * @returns styled hook
 */
function createStyleHook<T extends AllowedStyles>(styles: (theme: Theme) => T) {
  return () => {
    const reStyleTheme = useTheme<Theme>();
    return styles(reStyleTheme);
  };
}

export default createStyleHook;
