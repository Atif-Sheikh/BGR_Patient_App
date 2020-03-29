import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  ImageBackground,
  ScrollView,
  FlatList
} from "react-native";
import { Card, Button } from "native-base";
import { RadioButton, TextInput } from "react-native-paper";

import { YellowBox } from "react-native";
import _ from "lodash";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

// componentWillMount(){
//     this.responseList();
// }

export default class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLanguage: "Choose Location",
      secondLanguage: "Choose Date",
      time: "Choose Time",
      book: false,
      check: "Old Patient",
      names: "",
      number: "",
      data: [],

      dates: [],
      times: []
    };
  }
  onSubmit() {
    this.setState({ book: "true" });
    this.setState({ names: "", number: "" });
  }

  onReset() {
    this.setState({
      firstLanguage: "Choose Location",
      secondLanguage: "Choose Date",
      time: "Choose Time",
      book: false
    });
  }

  responseList() {
    fetch(
      "http://gbr.thehoststudio.in/gbr/fetch.php"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson});

        console.log(this.state.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  changeLanguage = (itemValue) => {
    const { firstLanguage } = this.state;

    this.setState({ firstLanguage: itemValue }, () => {
      
        fetch('http://gbr.thehoststudio.in/gbr/fetchdate.php', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "loc_name": itemValue })
        }).then((response) => {
          // console.log(JSON.stringify(response), "RESP")
          return response.json();
        }).then((date) => {
          this.setState({ dates: date });
        })

    });                    
  }

  onchangeDate = (itemValue) => {
    const { time, firstLanguage } = this.state;

    this.setState({ secondLanguage: itemValue }, () => {

        fetch('http://gbr.thehoststudio.in/gbr/fetchtime.php', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "loc_name": firstLanguage, "avail_date": itemValue })
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.setState({ times: data });
        })

    })
  }

  // fetchData = async()=>{
  //     const response = await fetch('http://gbr.thehoststudio.in/gbr/fetch.php');
  //     const users = await response.json();
  //     this.setState({data: users});

  //   }

  componentDidMount() {
    YellowBox.ignoreWarnings(["First Warning!"]);
    console.warn("First Warning!");
    console.warn("Second Warning!");
    console.disableYellowBox = true;
    this.responseList();
  }

  showUser() {
    if (this.state.check == "New Patient") {
      return (
        <View style={{ flex: 0.3, margin: 10, marginBottom: 5 }}>
          <TextInput
            style={styles.input}
            value={this.state.names}
            placeholder="Enter your Name"
            keyboardType={"default"}
            placeholderTextColor="#26C6DA"
            autoCorrect={false}
            clearTextOnFocus={true}
            onChangeText={nam => this.setState({ names: nam })}
          />
          <TextInput
            style={styles.input}
            value={this.state.number}
            placeholder="Enter your Phonenumber"
            keyboardType={"decimal-pad"}
            placeholderTextColor="#26C6DA"
            autoCorrect={false}
            clearTextOnFocus={true}
            onChangeText={number => this.setState({ number: number })}
          />
        </View>
      );
    } else {
      return <View />;
    }
  }

  render() {
    const { check, data, dates, times } = this.state;
    return (
      <ScrollView>
        <ImageBackground
          source={require("../../assets/blo.png")}
          style={{ height: "100%", width: "100%", elevation: 20 }}
        >
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <RadioButton
                value="Old Patient"
                status={check === "Old Patient" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ check: "Old User" });
                }}
              />
              <View>
                <Text
                  style={{ fontSize: 18, alignSelf: "center", marginRight: 30 }}
                >
                  Old Patient
                </Text>
              </View>

              <RadioButton
                value="New Patient"
                status={check === "New Patient" ? "checked" : "unchecked"}
                onPress={() => {
                  this.setState({ check: "New Patient" });
                }}
              />
              <View>
                <Text style={{ fontSize: 18, alignSelf: "center" }}>
                  New Patient
                </Text>
              </View>
            </View>

            {this.showUser()}

            <View>
              <Text style={styles.title}>Select Location</Text>
              <Picker
                style={styles.onePicker}
                itemStyle={styles.onePickerItem}
                selectedValue={this.state.firstLanguage}
                onValueChange={(val) => this.changeLanguage(val)}
              >
                <Picker.Item label="Choose Venue" />
                {
                  data && data.length ? data.map(obj => 
                    <Picker.Item label={obj.loc_name} value={obj.loc_name} />
                  )
                  :
                  null
                }
              </Picker>

              <Text style={styles.title}>Select Available Date :</Text>
              <Picker
                style={styles.onePicker}
                itemStyle={styles.onePickerItem}
                selectedValue={this.state.secondLanguage}
                onValueChange={itemValue => this.onchangeDate(itemValue)}
              >
                <Picker.Item label="Choose Date" />
                {
                  dates && dates.length ? dates.map(date => 
                    <Picker.Item label={date.loc_date} value={date.loc_date} />
                  )
                  :
                  null
                }
              </Picker>

              <Text style={styles.title}>Select Available Time :</Text>

              <Picker
                style={styles.onePicker}
                itemStyle={styles.onePickerItem}
                selectedValue={this.state.time}
                onValueChange={itemValue => this.setState({ time: itemValue })}
              >
                <Picker.Item label="Choose Time" />
                {
                  times && times.length ? times.map(({ time }) =>
                    <Picker.Item label={time} value={time} />
                  )
                  :
                  null
                }
              </Picker>
            </View>

           
            <View style={{ flexDirection: "row" }}>
              <Button
                dark
                block
                rounded
                style={{ margin: 15, width: 100 }}
                onPress={() => this.onSubmit()}
              >
                <Text style={{ color: "#fff" }}>Confirm</Text>
              </Button>

              <Button
                dark
                block
                rounded
                style={{ margin: 15, width: 100 }}
                onPress={() => this.onReset()}
              >
                <Text style={{ color: "#fff" }}>Reset</Text>
              </Button>
            </View>
          </View>

          {this.state.book ? (
            <View style={{ flex: 0.6, marginTop: 10 }}>
              <Card style={{ backgroundColor: "orange" }} rounded={true}>
                <View style={{ padding: 5 }}>
                  <Text style={{ fontSize: 20, alignSelf: "center" }}>
                    {" "}
                    Your Booking Status
                  </Text>
                  <Text>
                    --------------------------------------------------------------------------------------------------------
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    {" "}
                    Venue : {this.state.firstLanguage}
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    {" "}
                    Date & Time : {this.state.secondLanguage} &{" "}
                    {this.state.time}
                  </Text>
                  <Text style={{ fontSize: 15, color: "red" }}>
                    Hospital will Confirm your Appointment
                  </Text>
                </View>
              </Card>
            </View>
          ) : (
            <View />
          )}
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  picker: {
    width: 350,
    backgroundColor: "#FFF",
    borderColor: "black",
    borderWidth: 5
  },
  pickerView: {
    height: 400
  },
  pickerItem: {
    color: "red"
  },
  onePicker: {
    width: 350,
    height: 40,
    backgroundColor: "#FFF",
    borderColor: "black",
    borderWidth: 1
  },
  onePickerItem: {
    height: 40,
    color: "red"
  },
  input: {
    width: 200,
    height: "8%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 5,
    backgroundColor: "orange"
  }
});
