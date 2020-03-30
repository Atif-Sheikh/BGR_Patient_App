import * as React from 'react';
import { View,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default class MyComponent extends React.Component {
  // state = {
  //   checked: 'Male',
  // };

  render() {
    const { checked, changeGender } = this.props;

    return (
      <View style = {{flexDirection : "row"}}>
        <RadioButton
          value="Male"
          status={checked === 'Male' ? 'checked' : 'unchecked'}
          onPress={() => { changeGender('Male'); }}
        />
        <View>
            <Text style = {{fontSize : 18 , marginTop : 5}}>Male</Text>
        </View>
      
        <RadioButton
          value="Female"
          status={checked === 'Female' ? 'checked' : 'unchecked'}
          onPress={() => { changeGender('Female'); }}
        />
         <View>
            <Text style = {{fontSize : 18,marginTop : 5}}>Female</Text>
        </View>
       
      </View>
    );
  }
}