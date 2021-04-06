import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 291,
          height: 107,
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png",
        }}
      ></Image>
      <Text>CATCH!</Text>
      <Image
        source={{
          width: 255,
          height: 255,
          uri: "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png",
        }}
      ></Image>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5E0FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
