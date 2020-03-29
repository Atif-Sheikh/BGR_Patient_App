import React from 'react';
import {View,Text} from 'react-native';
const Description = () => {
    return(
        <View style= {{paddingTop : 7}}>
             <Text style= {{fontSize : 15}}> Underweight = Less than 18.5</Text>
             <Text style= {{fontSize : 15}}> Normal weight = 18.5–24.9</Text>
             <Text style= {{fontSize : 15}}>  Overweight = 25–29.9</Text>
             <Text style= {{fontSize : 15}}> Obesity = BMI of 30 or greater</Text>
        </View>
    );
}

export default Description;