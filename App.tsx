import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import Application from "./src/Application";
import { theme } from "./src/theme";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Application />
      </ThemeProvider>
    </NavigationContainer>
  );
}
