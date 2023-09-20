import { createBox } from "@shopify/restyle";
import Animated from "react-native-reanimated";

import type { Theme } from "../theme";

const Box = createBox<Theme>();
const AnimatedBox = Animated.createAnimatedComponent(Box);

export { AnimatedBox };
export default Box;
