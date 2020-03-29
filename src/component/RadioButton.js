import * as React from 'react';
import { View,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    checked: 'Male',
  };

  render() {
    const { checked } = this.state;

    return (
      <View style = {{flexDirection : "row"}}>
        <RadioButton
          value="Male"
          status={checked === 'Male' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'Male' }); }}
        />
        <View>
            <Text style = {{fontSize : 18 , marginTop : 5}}>Male</Text>
        </View>
      
        <RadioButton
          value="Female"
          status={checked === 'Female' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'Female' }); }}
        />
         <View>
            <Text style = {{fontSize : 18,marginTop : 5}}>Female</Text>
        </View>
       
      </View>
    );
  }
}