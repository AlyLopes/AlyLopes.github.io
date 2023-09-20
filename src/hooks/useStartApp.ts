import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { APP_FONTS, APP_STATUS } from "../constants";
import type { AppStatus } from "../types/app";

SplashScreen.preventAutoHideAsync();

function useStartApp() {
  const [appStatus, setAppStatus] = useState<AppStatus>(APP_STATUS.LOADING);
  const [fontsLoaded] = useFonts(APP_FONTS);

  useEffect(() => {
    const ready = fontsLoaded;

    if (ready) {
      setAppStatus(APP_STATUS.READY);

      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { appStatus };
}

export default useStartApp;
