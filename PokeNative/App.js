import React from "react";
import { View } from "react-native";
import SplashScreen from "./app/screens/SplashScreen";
import TutorialScherm from "./app/screens/TutorialScherm";
import TutorialSchermB from "./app/screens/TutorialSchermB";
import TutorialSchermC from "./app/screens/TutorialSchermC";
import TutorialSchermD from "./app/screens/TutorialSchermD";
import encounter from "./app/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="TutorialScherm" component={TutorialScherm} />
    <Stack.Screen name="TutorialSchermB" component={TutorialSchermB} />
    <Stack.Screen name="TutorialSchermC" component={TutorialSchermC} />
    <Stack.Screen name="TutorialSchermD" component={TutorialSchermD} />
    <Stack.Screen name="encounter" component={encounter} />

    

  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
