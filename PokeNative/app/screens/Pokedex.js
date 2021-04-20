import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function pokedex() {
    return (
        <SafeAreaView style={styles.background}>
            <Text>hoi</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
})
