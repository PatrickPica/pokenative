import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacityComponent,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { PragatiNarrow_400Regular } from "@expo-google-fonts/dev";

// Hier doe ik in principe hetzelfde als bij de home pagina ik maak een variabele met alle details van een specifieke pokemon
export default function Details({ route, navigation }) {
  const [details, setDetails] = useState([]);
  const [pokemontype, setPokemontype] = useState();

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    // const { state } = props.navigation;
    const { pokemon } = route.params;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((details) => {
        setDetails(details);
        setPokemontype(details.types);
      });
    console.log(pokemontype);
  };

  return details.name ? (
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
      <View style={styles.kaart}>
        <Image
          style={styles.plaatje}
          source={{
            uri: details.sprites.other["official-artwork"].front_default,
          }}
        />
        <Text style={styles.pokemonnaam}>{details.name}</Text>
        <Text style={styles.nummer}>#{details.id}</Text>
        {pokemontype &&
          pokemontype.map((type, index) => {
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
      </View>
      <View>
        <LinearGradient
          colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.terugknop}
        >
          <TouchableOpacity
            style={styles.terugknop}
            onPress={() => navigation.goBack("Home")}
          >
            <Text style={styles.knoptext}>BACK</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DC0916",
    justifyContent: "center",
    alignItems: "center",
  },
  knoptext: {
    fontFamily: "Rubik_500Medium",
    fontSize: 15,
    color: "#fff",
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
  kaart: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  plaatje: {
    width: 302,
    height: 302,
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
});
