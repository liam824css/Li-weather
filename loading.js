import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";







export default function Loading(){
    return (
    <LinearGradient 
        colors =  {["#AAFFD2", "#85FFFF"]}
        style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Getting the Li Weather </Text>
        <Text style={styles.text}>Beta test 0.32345 </Text>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end"
    },
    text :{
        color: "white",
        fontSize: 62

    },
    subtext :{
        color: "white",
        fontSize: 40

    }
    

})
