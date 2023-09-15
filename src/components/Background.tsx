import { useResponsiveProp, useTheme } from "@shopify/restyle";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import type { ViewProps } from "react-native";

import Box from "./Box";
import { MAX_PAGE_WIDTH } from "../constants";

type BackgroundProps = ViewProps;

const GRADIENT_END = { x: -0.1, y: 0.3 };
const GRADIENT_LOCATIONS = [0, 0.39];

function Background({ children, ...props }: BackgroundProps) {
  const { colors, spacing } = useTheme();
  const padding = useResponsiveProp({ phone: spacing.m, desktop: spacing.xxl });

  return (
    <LinearGradient
      style={{ padding, flex: 1 }}
      end={GRADIENT_END}
      locations={GRADIENT_LOCATIONS}
      colors={[colors.mainBackgroundTop, colors.mainBackgroundBottom]}
      {...props}
    >
      <Box maxWidth={MAX_PAGE_WIDTH} flex={1}>
        {children}
      </Box>
    </LinearGradient>
  );
}

export default Background;
