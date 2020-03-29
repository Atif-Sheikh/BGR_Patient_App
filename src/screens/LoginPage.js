import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage
} from "react-native";
import FB from "react-native-vector-icons/AntDesign";

const EntryScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(null);

  onPal = () => {
    setUserName("");
    setPassword(null);
  };

 componentDidMount=()=> {
  AsyncStorage.setItem('user_number' , userName);
 }

 displayData = async ()=>{  
  try{  
    let user = await AsyncStorage.getItem('user_number');  
    Alert.alert(user); 
    console.log(user); 
  }  
  catch(error){  
    Alert.alert(error);  
  }  
}  
 

  InsertDataToServer = () => {
    fetch("http://gbr.thehoststudio.in/gbr/login.php", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        pat_phone: userName,
        pat_pass: password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
         if(responseJson === 'Login Successful. Welcome !'+ userName){
          AsyncStorage.setItem('user_number' , userName);
        
          // navigation.setParams({userId: userName });
         navigation.navigate("Home")}else {
             Alert.alert("Try Again");
         }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/blo.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <KeyboardAvoidingView
       
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={{ marginTop: 10 }}>
          <View style={styles.frontLogoContainer}>
            <Image
              source={require("../../assets/gbg.png")}
              style={{ height: 250, width: 250 }}
            />
          </View>

          <View
            style={{
              marginBottom: 10,
              paddingBottom: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Phone number"
              onChangeText={value => setUserName(value)}
              value={userName}
              keyboardType={"decimal-pad"}
              placeholderTextColor="black"
              
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              onChangeText={value => setPassword(value)}
              value={password}
              keyboardType={"default"}
              placeholderTextColor="black"
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              paddingBottom: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity
              style={styles.inputButton}
              onPress={InsertDataToServer}
            >
              <View style={{ padding: 10 }}>
                <Text style={styles.textInput}>Login</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.inputButton}
              onPress={() => navigation.navigate("Signup")}
            >
              <View style={{ padding: 10 }}>
                <Text style={styles.textInput}>Signup</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingBottom: 40 }}>
            <TouchableOpacity
              style={{ paddingBottom: 10, alignItems: "center" }}
              onPress={() => navigation.navigate("Forgot")}
            >
              <View>
                <Text> Forgot Password</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPal}
              style={{ paddingBottom: 10, alignItems: "center" }}
            >
              <View>
                <Text> Reset</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 10,
                backgroundColor: "#283593",
                marginBottom: 10,
                height: 50
              }}
              // onPress={() => navigation.navigate("Home")}
              onPress={displayData}
            >
              <View style={{ paddingTop: 10, flexDirection: "row" }}>
                <FB
                  name="facebook-square"
                  size={30}
                  color="#fff"
                  style={{ paddingLeft: 10 }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    paddingLeft: 50,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Login with Facebook
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 10,
                backgroundColor: "#e53935",
                marginBottom: 10,
                height: 50
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={{ paddingTop: 10, flexDirection: "row" }}>
                <FB
                  name="googleplus"
                  size={30}
                  color="#fff"
                  style={{ paddingLeft: 10 }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: "#fff",
                    paddingLeft: 50,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Signin with Google+
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frontLogoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 60,
    width: "20%"
  },

  inputButton: {
    borderRadius: 40,
    backgroundColor: "#212121",
    width: 150,
    height: 40,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 20,
    shadowColor: "#FFF",
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10
  },
  textInput: {
    fontSize: 15,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#fff",
    textAlignVertical: "center"
  },
  inputStyle: {
    width: 300,
    height: 55,
    backgroundColor: "#fff",
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: "500",
    borderColor : "black",
    borderWidth : 1
  }
});
export default EntryScreen;
