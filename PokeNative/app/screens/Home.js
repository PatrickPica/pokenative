import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";
import { ImageBackground } from "react-native";
import axios from "axios";

const Pokemons = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };
};

function test({ navigation }) {
  const randNum = Math.abs(Math.floor(Math.random() * (0 - 151)));
  return (
    <SafeAreaView style={styles.test}>
      <Button title="ik snap er niks van" onPress={randNum}></Button>
      <Text>{Pokemons.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
  },
});

export default test;
