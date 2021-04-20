import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_700Bold_Italic,
} from "@expo-google-fonts/rubik";

import AppLoading from "expo-app-loading";

export default function pokedex({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Rubik_400Regular,
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.pokedexoog}></View>
      <Text>hoi</Text>
      <LinearGradient
        colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.terugknop}
      >
        <TouchableOpacity onPress={() => navigation.goBack("Home")}>
          <Text style={styles.knoptext}>GO BACK OUT THERE!</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DC0916",
    justifyContent: "center",
    alignItems: "center",
  },
  terugknop: {
    width: 215,
    height: 53,
    borderRadius: 27,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Rubik_500Medium",
    fontSize: 20,
    color: "#fff",
  },
  knoptext: {
    fontFamily: "Rubik_500Medium",
    fontSize: 15,
    color: "#fff",
  },
  pokedexoog: {
    width: 100,
    height: 100,
    backgroundColor: "#74DFFF",
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 6,
    position: "absolute",
    top: 60,
    left: 30,
  },
});
