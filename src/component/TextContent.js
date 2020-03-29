import React from 'react';
import {View , Text , StyleSheet, TouchableOpacity} from 'react-native';

const Home = () => {
    return (
        <TouchableOpacity>
        <View>
            <Text style = {Styles.textStyle}> Hello Click here</Text>
        </View>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    textStyle : {
        fontSize : 30,
        fontFamily : 'Pacifico-Regular',
        color : 'red'
    }
});

export default Home;