import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ProgressBarAndroid,
  Picker
} from "react-native";
import Line from '../component/LineHeader';
import Description from '../component/Description';
import { RadioButton } from 'react-native-paper';

export default class Bmitracker extends React.Component {
  state = {
    height: 0,
    mass: 0,
    resultNumber: '',
    resultText: "",
    result: '0',
    //gender: "Choose Gender",
    checked: "Male"
  };

  handleCalculate = () => {
    let imc = ((this.state.mass) / this.state.height ** 2) * 10000;
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
      this.setState({ result: 1 });
    } else if (imc > 18.5 && imc < 24.9) {
      this.setState({ resultText: "Normal Weight" });
      this.setState({ result: 2 });
    } else if (imc >= 25 && imc < 29.9) {
      this.setState({ resultText: "Overweight" });
      this.setState({ result: 3 });
    } else if (imc > 30.0) {
      this.setState({ resultText: "Obesity" });
      this.setState({ result: 4 });
    } else {
      this.setState({ resultText: 'Please Fill the Field' });
      this.setState({ result: '0' })
    }
  };


  renderImage() {
    if (this.state.checked == "Male") {
      switch (this.state.result) {
        case 1:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/male/uw1.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.25} color="#2196F3" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 2:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/male/n1.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.5} color="#FF5722" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 3:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/male/ow1.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.74} color="#EC407A" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 4:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/male/o1.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.95} color="#212121" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        default:
          return (
            <View>

            </View>
          );
      }
    } else if (this.state.checked == "Female") {
      switch (this.state.result) {
        case 1:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/female/uw2.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.25} color="#2196F3" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 2:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/female/n2.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.5} color="#FF5722" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 3:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/female/ow2.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.74} color="#EC407A" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        case 4:
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../images/female/o2.png')} style={{ height: 200, width: 200 }} />
              <ProgressBarAndroid progress={0.95} color="#212121" styleAttr="Horizontal" indeterminate={false} style={styles.progressStyle} />
              <Line />
              <Description />
            </View>
          );
        default:
          return (
            <View>

            </View>
          );
      }

    } else {
      <View />
    }

  }

  render() {

    const { checked } = this.state;
    return (
      <ImageBackground
        source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" ,elevation : 20}}
      >
        <View style={styles.container}>
              <Text style={styles.title}>Select Gender</Text>
              <View style={{ flexDirection: "row" , alignItems : "center" , justifyContent : "center" }}>
                        <RadioButton
                          value="Male"
                          status={checked === 'Male' ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ checked: 'Male' }); }}
                        />
                        <View>
                          <Text style={{ fontSize: 18, alignSelf : "center", marginRight : 30 }}>Male</Text>
                        </View>

                        <RadioButton
                          value="Female"
                          status={checked === 'Female' ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ checked: 'Female' }); }}
                        />
                        <View>
                          <Text style={{ fontSize: 18,alignSelf : "center"}}>Female</Text>
                        </View>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
            <Text style={{ fontSize: 20, paddingLeft: 40 ,fontWeight : "bold"}} >Height (cm)</Text>
            <Text style={{ fontSize: 20, paddingRight: 40 ,fontWeight : "bold" }}  >Weight (kg)</Text>
          </View>

          <View style={styles.intro}>
            <TextInput
              placeholder="Enter"
              keyboardType="numeric"
              placeholderTextColor="#CFD8DC"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Enter"
              keyboardType="numeric"
              placeholderTextColor="#CFD8DC"
              style={styles.input}
              onChangeText={mass => {
                this.setState({ mass });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}
          >
            <View>
              <Text style={styles.buttonText}>Calculate </Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.result1}>{this.state.resultNumber}</Text>
            <Text style={styles.result2}> {this.state.resultText} </Text>
          </View>

          {this.renderImage()}



        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
    // backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 25,
    textAlign: "center",
    width: "50%",
    fontSize: 20,
    color: "#000",
    textDecorationColor: "black"
  },
  button: {
    backgroundColor: "#1D1D1B",
      height : 50
  },
  buttonText: {
    alignSelf: "center",
    padding: 10,
    fontSize: 25,
    color: "white",
    fontWeight: "bold"

  },
  result1: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 25,
    padding: 5
  },
  result2: {
    alignSelf: "flex-end",
    color: "black",
    fontSize: 25
  },
  progressStyle: {
    paddingHorizontal: 10,
    height: 40,
    width: "95%",
    transform: [{ scaleX: 1.0 }, { scaleY: 5.5 }],
    paddingBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf : "center",
    justifyContent : "center"
  },
  onePicker: {
    width: 350,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 40,
    color: 'red'
  }
});


import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
