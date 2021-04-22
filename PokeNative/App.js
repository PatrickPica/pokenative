import React from "react";
import { View, ActivityIndicator } from "react-native";
import SplashScreen from "./app/screens/SplashScreen";
import TutorialScherm from "./app/screens/TutorialScherm";
import TutorialSchermB from "./app/screens/TutorialSchermB";
import TutorialSchermC from "./app/screens/TutorialSchermC";
import TutorialSchermD from "./app/screens/TutorialSchermD";
import pokedex from "./app/screens/Pokedex";
import Details from "./app/screens/Details";
import test from "./app/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/screens/Home";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
  <Stack.Screen name="Pokedex" component={pokedex} />
    <Stack.Screen name="TutorialScherm" component={TutorialScherm} />
    <Stack.Screen name="TutorialSchermB" component={TutorialSchermB} />
    <Stack.Screen name="TutorialSchermC" component={TutorialSchermC} />
    <Stack.Screen name="TutorialSchermD" component={TutorialSchermD} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details}/>

  
 
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
