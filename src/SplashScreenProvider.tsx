import { useContext, useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

import AppStatusContext from "./AppStatusContext";
import SplashScreen from "./components/SplashScreen";
import { APP_STATUS } from "./constants";

type SplashScreenProviderProps = {
  children: JSX.Element;
};

const ANIMATION_DURATION = 300;

function SplashScreenProvider({ children }: SplashScreenProviderProps) {
  const { appStatus } = useContext(AppStatusContext);
  const splashOpacity = useSharedValue(1);
  const [showSplash, setShowSplash] = useState(
    appStatus === APP_STATUS.LOADING
  );

  useEffect(() => {
    if (appStatus === APP_STATUS.LOADING) {
      setShowSplash(true);
    }

    if (appStatus === APP_STATUS.READY) {
      splashOpacity.value = withTiming(
        0,
        { duration: ANIMATION_DURATION },
        () => {
          setShowSplash(false);
        }
      );
    }
  }, [appStatus]);

  if (Platform.OS === "web" && showSplash) {
    return (
      <>
        <SplashScreen
          style={[
            styles.splash,
            {
              opacity: splashOpacity,
            },
          ]}
        />
        {children}
      </>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  splash: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
});

export default SplashScreenProvider;
