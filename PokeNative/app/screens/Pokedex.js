import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import PokeCard from "./components/Pokecard";
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
      <View style={{ flex: 1 }}>
        <View style={styles.pokedexoog}>
          <View style={styles.reflectie}></View>
          <View style={styles.roodlamp}></View>
          <View style={styles.geellamp}></View>
          <View style={styles.groenlamp}></View>
        </View>
        <Image
          style={styles.streepje}
          source={require("../assets/streepPokedex.png")}
        />
      </View>
      <View style={{ flex: 2 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1 }}>
            <Text style={styles.titel}>Pokédex</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <PokeCard />
              <PokeCard />
              <PokeCard />
            </ScrollView>
          </View>
        </ScrollView>
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
      </View>
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
    left: 50,
    top: 50,
  },
  reflectie: {
    backgroundColor: "#B9ECFF",
    width: 45,
    height: 23,
    borderRadius: 10,
    position: "absolute",
    top: 10,
    left: 21,
  },
  roodlamp: {
    width: 26,
    height: 26,
    borderRadius: 50,
    borderWidth: 2,
    position: "absolute",
    left: 120,
    backgroundColor: "#FF1515",
    borderColor: "#A20000",
  },
  geellamp: {
    width: 26,
    height: 26,
    borderRadius: 50,
    borderWidth: 2,
    position: "absolute",
    left: 150,
    backgroundColor: "#FFCB3E",
    borderColor: "#A20000",
  },
  groenlamp: {
    width: 26,
    height: 26,
    borderRadius: 50,
    borderWidth: 2,
    position: "absolute",
    left: 180,
    backgroundColor: "#4BFF15",
    borderColor: "#A20000",
  },
  streepje: {
    marginTop: 120,
  },
  titel: {
    fontFamily: "Rubik_500Medium",
    fontSize: 23,
    color: "#fff",
  },
  pokemoncard: {
    width: 179,
    height: 196,
  },
});
