import React, {useState, useEffect,} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Details({navigation}) {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    const fetchPokemonDetails = () => {
        const {state} = navigation;
        fetch(`https://pokeapi.co/api/v2/pokemon/$`)
          .then(res => res.json())
          .then(details => setDetails(details));
          console.log(details);
      };

    return  (
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
      <View>
          <Text></Text>
      </View>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
            <Text style={styles.knoptext}>BACK</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#DC0916",
        justifyContent: "center",
        alignItems: "center",
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
})
