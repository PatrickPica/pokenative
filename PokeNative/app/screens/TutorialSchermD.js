import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ImageBackground } from "react-native";
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

function TutorialSchermD({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.pokedexicon} source={require('../assets/pokedexicon.png')}/>
      <Image
        style={styles.profoak}
        source={{
          width: 187,
          height: 448,
          uri:
            "https://www.serebii.net/pokemonmasters/syncpairs/professoroak.png",
        }}
      ></Image>
      <View style={styles.tutor}>
        <Text>
        It automatically records data on Pokémon you’ve seen or caught!
Well go out there and good luck!        </Text>
<TouchableOpacity
          title=">"
          style={styles.knop}
          onPress={() => navigation.navigate("encounter")}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#D3FFE0",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profoak: {
    justifyContent: "center",
    marginTop: 50,
  },
  pokedexicon: {
    position: "absolute",
    top: 60,
    left: 40,
    width: 42,
    height: 42,
  },

  tutor: {
    marginTop: 50,
    maxWidth: 323,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    borderColor: "#8DD8FF",
    borderWidth: 3,
  },
  knop: {
    backgroundColor: "#FF2222",
    position: "absolute",
    right: 20,
    top: 70,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    transform: [{ rotate: "180deg" }],
  },
});
export default TutorialSchermD;
