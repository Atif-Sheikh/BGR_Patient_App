import React from 'react';
import {View,Text} from 'react-native';

const Line = () => {
    return(
    <View style = {{flexDirection : "row" , padding : 0 , margin : 0} }>
                <Text style = {{fontSize : 10 , paddingLeft : 20 , color :"#2196F3"}}>UnderWeight</Text>
                <Text style = {{fontSize : 10 , paddingLeft : 50 , color :"#FF5722" }}>Normal</Text>
                <Text style = {{fontSize : 10 , paddingLeft : 50 , color :"#EC407A"}}>OverWeight</Text>
                <Text style = {{fontSize : 10 , paddingLeft : 40 , color :"#212121"}}>Obesity</Text>
  </View>
    );
}

export default Line;