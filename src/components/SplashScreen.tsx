import { useTheme } from "@shopify/restyle";
import type { ViewProps } from "react-native";
import { ActivityIndicator } from "react-native";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import Background from "./Background";
import Box from "./Box";
import Text from "./Text";
import type { Theme } from "../theme";

type SplashScreenProps = AnimateProps<ViewProps>;

function SplashScreen({ style }: SplashScreenProps) {
  const { colors, spacing } = useTheme<Theme>();

  return (
    <Animated.View style={[{ flex: 1 }, style]}>
      <Background>
        <Box flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={colors.greenLight} size={spacing.xxl} />
          <Text marginTop="l" variant="subHeader">
            Loading...
          </Text>
        </Box>
      </Background>
    </Animated.View>
  );
}

export default SplashScreen;
