import type { Route } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import AppStatusContext from "./src/AppStatusContext";
import Application from "./src/Application";
import SplashScreenProvider from "./src/SplashScreenProvider";
import useStartApp from "./src/hooks/useStartApp";
import ROUTES, { PAGE_TITLES } from "./src/routes";
import { theme } from "./src/theme";

function formatter(
  options: Record<string, any> | undefined,
  route: Route<string> | undefined,
) {
  if (options?.title) return options.title;

  const routeName = (route?.name ?? ROUTES.Home) as keyof typeof ROUTES;

  return PAGE_TITLES[routeName];
}

export default function App() {
  const contextValue = useStartApp();

  return (
    <NavigationContainer
      documentTitle={{
        formatter,
      }}
    >
      <ThemeProvider theme={theme}>
        <AppStatusContext.Provider value={contextValue}>
          <SplashScreenProvider>
            <Application />
          </SplashScreenProvider>
        </AppStatusContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
