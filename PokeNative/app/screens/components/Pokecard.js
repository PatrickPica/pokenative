import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import randomPokemon from "../Home";

export default function PokeCard() {
  const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfeild, setSearchfeild] = useState("");
    useEffect(() => {
      fetchPokemons();
    }, []);
    const fetchPokemons = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
        .then((response) => response.json())
        .then((pokemons) => setPokemons(pokemons.results));
    };
  };
  return (
    <View style={styles.kaart}>
      <View style={{ flex: 2 }}>
        <Image></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Pokemonnaam</Text>
        <Text>Pokemontype</Text>
        <Text>nummer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kaart: {
    height: 196,
    width: 179,
    marginLeft: 20,
    backgroundColor: "#B90611",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },
});
