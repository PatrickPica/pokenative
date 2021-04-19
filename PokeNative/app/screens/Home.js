import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, ImageBackground } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_700Bold_Italic,
} from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [pokemon, setPokemon] = useState("Start your adventure!");
  const [pokemonImg, setPokemonImg] = useState();
  const [wildpokemon, setWildpokemon] = useState("");
  const [typepokemon, setTypepokemon] = useState();
  const [nummerpokemon, setNummerpokemon] = useState();
  const combineStyles = StyleSheet.flatten(["poison", "water"]);

  function randomPokemon() {
    const randNum = Math.abs(Math.floor(Math.random() * (0 - 151)));
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.name);
        setTypepokemon(data.types);
        setNummerpokemon(data.id);
        setWildpokemon("A wild Pokémon appeared!");
        setPokemonImg(data.sprites.other["official-artwork"].front_default);
        console.log(data);
      })
      .catch(console.error);
  }

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
    <LinearGradient colors={["#08B6B6", "#045B5B"]} style={styles.background}>
      <Image
        style={styles.pokedexicon}
        source={require("../assets/pokedexicon.png")}
      />
      <SafeAreaView style={styles.encounter}>
        <Text style={styles.appeared}>{wildpokemon}</Text>
        <Image style={styles.plaatje} source={{ uri: pokemonImg }} />
        {nummerpokemon && <Text style={styles.nummer}>#{nummerpokemon}</Text>}
        <Text style={styles.pokemonnaam}>{pokemon}</Text>
        {typepokemon &&
          typepokemon.map((type, index) => {
            return (
              <Text
                key={index}
                style={
                  type.type.name === "poison"
                    ? "poison pokemontype"
                    : type.type.name === "water"
                }
              >
                {type.type.name}
              </Text>
            );
          })}
        <LinearGradient
          colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.catchknop}
        >
          <TouchableOpacity style={styles.catchknop} onPress={randomPokemon}>
            <Text style={styles.catchtext}>CATCH POKEMON!</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  appeared: {
    fontFamily: "Rubik_700Bold_Italic",
    fontSize: 25,
    color: "#fff",
  },

  encounter: {
    justifyContent: "center",
    alignItems: "center",
  },
  plaatje: {
    height: 302,
    width: 302,
  },

  pokemonnaam: {
    fontFamily: "Rubik_400Regular",
    fontSize: 39,
    color: "#fff",
    padding: 10,
  },
  nummer: {
    fontFamily: "Rubik_700Bold",
    fontSize: 20,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.5);",
    width: 62,
    padding: 3,
    margin: 4,
    height: 27,
  },
  catchknop: {
    width: 215,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    margin: 20,
  },
  catchtext: {
    fontFamily: "Rubik_500Medium",
    fontSize: 20,
    color: "#fff",
  },
  pokedexicon: {
    position: "absolute",
    top: 60,
    left: 40,
    width: 42,
    height: 42,
  },

  pokemontype: {
    width: 200,
  },

  poison: {
    backgroundColor: "#e052e2",
    width: 82,
    maxHeight: 24,
  },

  water: {
    backgroundColor: "blue",
  },
});
