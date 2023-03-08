import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";



let customFonts = {
  "Green Smile": require("../assets/Green Smile.ttf"),
};

   class Inicial extends Component {


  render(){
 

        return(
            <View>
                 <Text style={styles.textoteste}>Ola isso é um teste</Text>
            </View>
        )
    }
  }


export default Inicial;

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#99baf0',
        height:800,
        
       
     },
     textoteste:{
         color:'#1d4b96',
         marginTop:400,
         textAlign:'center'
     },
     

})