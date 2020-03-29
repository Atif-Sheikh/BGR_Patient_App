import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = () => {
    return(
           <View style = {styles.viewStyle}>
               <Text style = {styles.textStyle}>
               HomePage
               </Text>
           </View>
       );
         
};
const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor : '#03a9f4',
        justifyContent : "center",
        alignItems: "center",
        height : 60,
        paddingTop: 0, 
        shadowColor : '#000',
        shadowOffset: {width : 5 , height:10},
        shadowOpacity : 0.2,
        elevation : 1,
        position :"relative",
        marginBottom: 20,
        width : "100%",
        top : 0,left : 0 , right : 0

    },

    textStyle: {
        fontSize : 30, 
        color: "white",
        fontFamily : "Pacifico-Regular"
    
       
    }
});

export default Header;