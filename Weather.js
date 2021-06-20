import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName : "weather-hail",
        LinearGradient : ["#C3C3C3", "#4E4E4E"],
        title: "There is fog!",
        subtitle: "Be careful when driving."
    },
    Clear: {
        iconName : "white-balance-sunny",
        LinearGradient : ["#B8FFFD", "#B4D6D6", "#076666"],
        title: "The sky is clear!",
        subtitle: "I feel refreshed.:D"
    },
    Clouds: {
        iconName : "cloud",
        LinearGradient : ["#FFFFFF",  "#838383"],
        title: "There is a cloud!",
        subtitle: "When you go out, you have to bring an umbrella."
    },
    Mist: {
        iconName : "weather-fog",
        LinearGradient : ["#BDBDBD",  "#3B3B3B"],
        title: "beta testing . . .",
        subtitle: "beta test!"
    },
    Snow: {
        iconName : "snowflake",
        LinearGradient : ["#73FFD0",  "#45D6F2"],
        title: "It's snowing!",
        subtitle: "Let's make a snowman! let it go~ "
    },
    Rain: {
        iconName : "weather-rainy",
        LinearGradient : ["#FFFFFF",  "#45D6F2"],
        title: "It's raining!",
        subtitle: "It's raining, so it feels uncomfortable."
    },
    Drizzle: {
        iconName : "weather-rainy",
        LinearGradient : ["#C6B9B9",  "#39ACC3"],
        title: "It's raining little by little.",
        subtitle: "Bring an umbrella."
        
    },
    Thunderstorm: {
        iconName : "weather-lightning-rainy",
        LinearGradient : ["#8F7D7D",  "#7477E1"],
        title: "beta testing . . .",
        subtitle: "beta test"
    },

};



export default function Weather({temp, condition }){
    return(
     <LinearGradient 
     colors={weatherOptions[condition].LinearGradient} 
     style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfcontainer} >
            
         <MaterialCommunityIcons color="#707070"size={150}name={weatherOptions[condition].iconName} color="white" />
         <Text style={styles.temp}>{temp} ℃ </Text>
         <View style={styles.halfContainer} />
         </View>
         <View>
        <View style={[styles.halfContainer, styles.textContainer]}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </View>
        
     </LinearGradient>    
     
    );
}

Weather.propTypes = {  
    temp: PropTypes.number.isRequired,   
    condition: PropTypes.oneOf([
     "Thunderstorm", 
     "Drizzle", 
     "Rain", 
     "Snow", 
     "Atmosphere",
     "Clear",
     "Clouds",
     "Haze",
     "Mist"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        fontStyle: "normal",
        color: "white"
        
        
    },
    halfcontainer: {
        flex:1.1,
        justifyContent:"center",
        alignItems: "center"
    },
    subtitle: {
        color:"white",
        fontWeight:"600",
        fontSize: 18
        
    },
    title: {
        color: "white",
        fontSize: 45,
        fontWeight: "300",
        marginBottom:20
    
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        flex:0.5

    }
})
