import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import type { RootStackParamsList } from "./types/navigation";

const RootStack = createStackNavigator<RootStackParamsList>();

function Application() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default Application;
