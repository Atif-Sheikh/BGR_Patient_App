import React from 'react';
import {View,Text,TextInput,StyleSheet,Button , ImageBackground } from 'react-native';

const ForgotPassword = ({navigation}) => {
    return(

<ImageBackground source = {require('../images/dc76.jpg')} style = {{height : "100%" , width : "100%"}}>
        <View style = {styles.container} >  
                <Text>Enter Phone Number</Text>
                
                  <TextInput 
                   style= {styles.input}
                   keyboardType = {"decimal-pad"}
                   placeholderTextColor = "grey"
                   autoCorrect = {false}
                   clearTextOnFocus = {true}
                   />
                   <View style = {{padding : 10}}>
                          <Button title = "Submit" onPress = {()=> navigation.navigate('OTP')}/>
                   </View>
                  
            </View>
     </ImageBackground>     

    );
}

const styles = StyleSheet.create({
 
    container : {
        flex :1,
        alignItems : "center",
        justifyContent : "flex-start"

    },
    input : {
        width : 200,
        height : "7%" ,
        borderBottomWidth: 2 ,
        marginTop:20,
        textAlign : "center",
        fontSize : 20
    }
});


export default ForgotPassword;