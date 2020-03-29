import React from 'react';
import {View , StyleSheet , Text , TouchableOpacity , ImageBackground } from 'react-native';


const Connection = ({navigation}) => {
    return (


        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" ,elevation : 20}}>  
        <View style = {styles.container}>

      
             <View style = {{margin : 20}}>
                <TouchableOpacity style = {styles.profileStyle} onPress = {()=> navigation.navigate('Feedback')}>
                  <Text style = {styles.profileTextStyle}>Feedback Form</Text>
                </TouchableOpacity>
            </View>

            <View style = {{margin : 20}}>
                <TouchableOpacity style = {styles.profileStyle}  onPress = {()=> navigation.navigate('Youtube')} >
                  <Text style = {styles.profileTextStyle}>Subscribe Youtube </Text>
                </TouchableOpacity>
            </View>

            <View style = {{margin : 20}} >
                <TouchableOpacity style = {styles.profileStyle} onPress = {()=> navigation.navigate('Facebook')}>
                  <Text style = {styles.profileTextStyle}>Link us on Facebook</Text>
                </TouchableOpacity>
            </View>
      </View>
      </ImageBackground>
    );
}

export default Connection;

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        justifyContent : "center", 
        alignItems : "center"
    },
    profileStyle : {
        backgroundColor : "#008687" , 
        width : 280 , 
        borderRadius : 20 ,
        shadowOpacity : 10 , 
        shadowOpacity : 0.5,
        elevation : 2,
        justifyContent : "center", 
        alignItems : "center"
       },
    
       profileTextStyle  : {
            fontSize : 20,
            color: "#fff" ,
            alignItems : "center" , 
            justifyContent : "center" ,  
            padding : 5
     } 
});