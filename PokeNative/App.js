import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

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
      <Text style={styles.textsplash}>CATCH!</Text>
      <Image
        style={styles.splashimage}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textsplash: {
    fontSize: 52,
    color: "#fff",
    fontStyle: "italic",
    paddingTop: 20,
  },
  splashimage: {
    marginTop: 50,
  },
});
