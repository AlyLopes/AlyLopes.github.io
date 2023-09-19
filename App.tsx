import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import AppStatusContext from "./src/AppStatusContext";
import Application from "./src/Application";
import useStartApp from "./src/hooks/useStartApp";
import { theme } from "./src/theme";

export default function App() {
  const contextValue = useStartApp();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppStatusContext.Provider value={contextValue}>
          <Application />
        </AppStatusContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
