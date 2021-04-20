import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function pokedex({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <Text>hoi</Text>
            <Button title="GO BACK OUT THERE!" style={styles.terugknop} onPress={() => navigation.goBack("Home")}></Button>
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
    terugknop: {
        width: 215,
        height: 53,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 27,
        margin: 20,
      },
})
