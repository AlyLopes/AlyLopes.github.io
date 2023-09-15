import { createText } from "@shopify/restyle";
import { Animated } from "react-native";

import type { Theme } from "../theme";

const Text = createText<Theme>();
const AnimatedText = Animated.createAnimatedComponent(Text);

export { AnimatedText };
export default Text;
