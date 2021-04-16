import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, ImageBackground } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
} from "@expo-google-fonts/rubik";
import { AppLoading } from "expo";
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
  });
  return (
    <LinearGradient colors={["#08B6B6", "#045B5B"]} style={styles.background}>
      <SafeAreaView style={styles.encounter}>
        <Text style={styles.appeared}>{wildpokemon}</Text>
        <Text style={styles.nummer}>#{nummerpokemon}</Text>
        <Text style={styles.pokemonnaam}>{pokemon}</Text>
        <Text></Text>
        <Button title="Zoek Pokemon" onPress={randomPokemon}></Button>
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
  encounter: {
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonnaam: {
    fontFamily: "Rubik_400Regular",
    fontSize: 30,
    color: "#fff",
  },
});
