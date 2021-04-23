import React, { useState, useEffect, Icon,  } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  filter,
  searchfield,
} from "react-native";
import PokeCard from "./components/Pokecard";
import { getStateFromPath, NavigationContainer } from "@react-navigation/native";
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
import Home from "../screens/Home";
import randomPokemon from "../screens/Home";
import pokemon from "../screens/Home";
import AppLoading from "expo-app-loading";
import { TextInput } from "react-native-gesture-handler";
import { Value } from "react-native-reanimated";
import { ProzaLibre_600SemiBold } from "@expo-google-fonts/dev";

// Hier maak ik weer een paar usestates aan om data op te slaan voor de searchfield en pokemons
export default function pokedex ({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonImg, setPokemonImg] = useState();
  const [searchfield, setSearchfield] = useState("");


  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((pokemons) => {
        setPokemons(pokemons.results);
      })
      .catch(console.error);
  };


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
    // hieronder volgt een hoop css werk haha! maar dat vind ik leuk om te doen om mijn design na te maken van de prototype in XD
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
      {/* Ik heb hieronder dus de informatie met een horizontale scroller gemaakt, dit vond ik vet en werkt ook nog eens.
      voor dat scrollen moest ik wel weer even een tutorial volgen over hoe dat moest. */}
      <View style={{ flex: 2 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1 }}>
            <Text style={styles.titel}>Pokédex</Text>
            <View style={styles.searchbar}>
              <TextInput
                placeholder="Search Pokemons"
                onChangeText={(Value) => setSearchfield(Value)}
                value={searchfield}
              ></TextInput>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {pokemons
                .filter((pokemon) =>
                  pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
                )
                .map((pokemon, index) => {
                  return (
                    // bij de image hier had ik echter wel een probleem, de api gaf met de globale link alleen een naam terug,
                    // niet zoals met een specifieke pokemon die dan alles van die pokemon geeft vandaar moest ik een andere afbeeldingen pagina benaderen.
                    <TouchableOpacity onPress={() => navigation.navigate("Details")} style={styles.kaart} key={index}>
                      <View style={{ flex: 2, marginBottom: 40, }}>
                        <Image
                          style={styles.pokemonplaatje}
                          key={index}
                          source={{
                            uri: `https://img.pokemondb.net/sprites/home/normal/${
                              pokemon.name
                            }.png`,
                          }}
                        ></Image>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.pokenaam} key={index}>{pokemon.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
        </ScrollView>
  
      </View>
      <LinearGradient
          colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.terugknop}>
        // hier navigeer ik weer terug naar de random pokemon scherm
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
    marginLeft: 20,
  },
  kaart: {
    height: 196,
    width: 179,
    marginLeft: 20,
    backgroundColor: "#B90611",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },
  searchbar: {
    height: 30,
    borderRadius: 50,
    backgroundColor: "#B90611",
    width: 250,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  pokemonplaatje: {
    width: 147,
    height: 147,
  },
  pokenaam: {
    fontFamily: "Rubik_700Bold",
    color: "#fff",
    paddingTop: 10,
    fontSize: 16,

  }
});
