
import React from 'react';
import Loading from "./loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "3adc5f6300622b10860e3ebc23e42b87";


export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      condition: weather[0].main, 
      temp
    });

  };

  getLocation = async() => {
    try {
      
     await Location.getForegroundPermissionsAsync(); 
     
     const { 
       coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
     
      
    }catch (error){
      Alert.alert("(error):Can't find you!", "where are you?, \n If you keep getting the error, please contact mippo7404@Gmail.com.");
    }
   
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather  temp={Math.round(temp)} condition={condition} />;
  }
}

