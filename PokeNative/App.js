import React from "react";
import { View, ActivityIndicator } from "react-native";
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
// In principe wat ik hier heb gedaan is dat ik een stacknavigator heb gebruikt om de schermen met elkaar te verbinden en je een navigatie in je app hebt
// ik heb dit gevonden doormiddel van de cursus die ik heb gevolgd daarin werd helemaal uitgelegd hoe dit werkt
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* hier benoem ik dan ook alle schermen die ik gebruik in mijn app en zorg dat ze goed allemaal met elkaar linken
    het linken zelf doe je in de pagina zelf maar hier moeten ze allemaal staan in de stacknavigator */}
  
    <Stack.Screen name="TutorialScherm" component={TutorialScherm} />
    <Stack.Screen name="TutorialSchermB" component={TutorialSchermB} />
    <Stack.Screen name="TutorialSchermC" component={TutorialSchermC} />
    <Stack.Screen name="TutorialSchermD" component={TutorialSchermD} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Pokedex" component={pokedex} />
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
