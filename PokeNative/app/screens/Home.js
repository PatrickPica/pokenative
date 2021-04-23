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
import react from "react";

// Hier komt t meest lastige van mijn app, ik heb gelukkig wel gebruik kunnen maken van mijn app gemaakt in react maar er zaten toch nog wel wat verschillen in.
export default function Home({ navigation }) {
  const [pokemon, setPokemon] = useState("Start your adventure!");
  const [pokemonImg, setPokemonImg] = useState();
  const [wildpokemon, setWildpokemon] = useState("");
  const [typepokemon, setTypepokemon] = useState();
  const [nummerpokemon, setNummerpokemon] = useState();
// Hieronder sla ik dus alle data op van de api van een specifieke pokemon in de use states die hierboven staan vermeld
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
// Hieronder gebruik ik die variabelen waarin de data van de api zijn opgeslagen in elementen van de app
  return (
    <LinearGradient colors={["#08B6B6", "#045B5B"]} style={styles.background}>
      <TouchableOpacity
        style={styles.pokedexicon}
        onPress={() => navigation.navigate("Pokedex")}
      >
        <Image style={styles.pokedexicoon} source={require("../assets/pokedexicon.png")} />
      </TouchableOpacity>
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
                style={[
                  styles.pokemontype,
                  type.type.name === "poison"
                    ? styles.poison
                    : type.type.name === "water"
                    ? styles.water
                    : type.type.name === "bug"
                    ? styles.bug
                    : type.type.name === "normal"
                    ? styles.normal
                    : type.type.name === "electric"
                    ? styles.electric
                    : type.type.name === "fighting"
                    ? styles.fighting
                    : type.type.name === "ground"
                    ? styles.ground
                    : type.type.name === "psychic"
                    ? styles.psychic
                    : type.type.name === "rock"
                    ? styles.rock
                    : type.type.name === "fire"
                    ? styles.fire
                    : type.type.name === "grass"
                    ? styles.grass
                    : type.type.name === "ice"
                    ? styles.ice
                    : type.type.name === "flying"
                    ? styles.flying
                    : type.type.name === "ghost"
                    ? styles.ghost
                    : type.type.name === "dragon"
                    ? styles.dragon
                    : "",
                ]}
              >
                {type.type.name}
              </Text>
            );
          })}
        <LinearGradient
          colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.catchknop}>
        {/* //Hier roep ik de functie aan die een random pokemon met daarbij de data van de api. */}
        
          <TouchableOpacity style={styles.catchknop} onPress={randomPokemon}>
            <Text style={styles.catchtext}>CATCH POKEMON!</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </LinearGradient>
  );
}
// Hieronder volgt de style van de pagina
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
    textAlign: "center",
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
    overflow: "hidden",
    textAlign: "center",
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
    width: 82,
    maxHeight: 24,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Rubik_500Medium",
    borderRadius: 6,
    margin: 5,
    fontSize: 16,
    overflow: "hidden",
  },

  poison: {
    backgroundColor: "#e052e2",
  },

  water: {
    backgroundColor: "#3da1df",
  },

  bug: {
    backgroundColor: "#a8b821",
  },

  normal: {
    backgroundColor: "#a8a878",
  },

  electric: {
    backgroundColor: "#f8d030",
  },

  fighting: {
    backgroundColor: "#c03028",
  },

  ground: {
    backgroundColor: "#e0c068",
  },

  psychic: {
    backgroundColor: "#f85888",
  },

  rock: {
    backgroundColor: "#b8a038",
  },

  dark: {
    backgroundColor: "#705848",
  },

  fire: {
    backgroundColor: "#f08030",
  },
  grass: {
    backgroundColor: "#4ddf3d",
  },

  ice: {
    backgroundColor: "#98d8d8",
  },

  flying: {
    backgroundColor: "#a890f0",
  },

  ghost: {
    backgroundColor: "#943ddf",
  },

  dragon: {
    backgroundColor: "#7038f8",
  },
  pokedexicoon: {
    width: 42,
    height:42,
  }
});
