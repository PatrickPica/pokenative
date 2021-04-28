import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_700Bold_Italic,
} from "@expo-google-fonts/rubik";
import {
  Dimensions,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
//Hieronder komt de functie om de pagina te maken, hier laad ik onder andere meerdere elementen in om de pagina te maken.
function TutorialScherm({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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
      <Image
        style={styles.profoak}
        source={{
          width: 187,
          height: 448,
          uri:
            "https://www.serebii.net/pokemonmasters/syncpairs/professoroak.png",
        }}
      ></Image>
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>What is your name?</Text>
            <TextInput style={styles.invoerveld} placeholder="name"></TextInput>
            <LinearGradient
              style={styles.hidemodal}
              colors={["rgba(161, 221, 157, 1)", "rgba(44, 205, 168, 1)"]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonFill, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modalopentext}>Fill in name</Text>
      </Pressable>
      <TouchableOpacity onPress={() => navigation.navigate("TutorialSchermB")}>
        <View style={styles.tutor}>
          <Text>
            Hi, I'm proffesor Oak and welcome to the world of Pokémon! First,
            what is your name?
          </Text>
          {/* hier laat ik doormiddel van een navigation die ik in app.js heb aangemaakt de schermen met elkaar verbinden. */}
          <View title=">" style={styles.knop}></View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
// de styling van de pagina
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#D3FFE0",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalopentext: {
    color: "#000",
  },

  hidemodal: {
    borderRadius: 20,
    width: 155,
    justifyContent: "center",
    alignItems: "center",
    height: 31,
  },
  modalView: {
    backgroundColor: "#fff",
    width: 292,
    height: 189,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
  },
  textStyle: {
    fontSize: 16,
    color: "#fff",
  },

  buttonFill: {
    position: "absolute",
    top: 60,
    left: 30,
    backgroundColor: "red",
    borderRadius: 20,
  },
  modalopentext: {
    color: "#fff",
    padding: 5,
    fontFamily: "Rubik_500Medium",
  },
  invoerveld: {
    height: 27,
    borderRadius: 50,
    backgroundColor: "#E9E9E9",
    width: 187,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  profoak: {
    justifyContent: "center",
    marginTop: 50,
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
export default TutorialScherm;
