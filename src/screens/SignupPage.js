import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground,Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert, Picker , Platform } from 'react-native';
// import RadioButton from '../component/RadioButton';
import { RadioButton } from 'react-native-paper';

export default SignupScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [emailid, setEmailid] = useState("");
    const [Age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirm,setConfirm ] = useState("");
    const [check ,setCheck] = useState("Male");
    const [emailError , setEmailError] = useState(false);
    const [numberError , setNumberError] = useState(false);
    const [passwordError , setPasswordError] = useState(false);
    const [confirmError , setConfirmError] = useState(false);

    
    getChecked = (value) => {
        // value = our checked value
        Alert.alert(value);
    }


    emailValidation = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email && !re.test(email.toString().toLowerCase())){
        setEmailError(true) & setEmailid(email);
        }
        else{
            setEmailError(false) & setEmailid(email);
        }
    };

    numberValidation = (num) => {
        if(num.length != 10 ){
            setNumberError(true) & setNumber(num);
        }
        else{
            setNumberError(false) & setNumber(num);
        }
    }

    passwordValidation = (pass) => {
        if(password && password.length < 6 ){
            setPasswordError(true) & setPassword(pass);
        }
        else{
            setPasswordError(false) & setPassword(pass);
        }
    }

    confirmValidation = (con) => {
        if(confirm == password ||  password.length == 0){
            setConfirmError(true) & setConfirm(con);
        }
        else{
            setConfirmError(false) & setConfirm(con);
        }
    }


    InsertDataToServer = () =>
{
    
         if(name.trim() === "" || password.trim().length < 6 || emailid.trim() === "" || Age.trim() === "" || check.trim() === "" ) {
            Alert.alert("All fields are mandatory");
         } else {

fetch('http://gbr.thehoststudio.in/gbr/gbrreg.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
 
  body: JSON.stringify({

    pat_name: (name),

    pat_phone: (number),

    pat_email : (emailid),

    pat_age : (Age),

    pat_gender : (check),

    pat_pass: (password),

    pat_conpass: (confirm)

  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        navigation.navigate('OTP');

      }).catch((error) => {
        console.error(error);
      });
 
 
  };
}
 
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0


    return (

        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ alignItems: "center" }}>
                    
                            <Image
                        source={require("../../assets/gbg.png")}
                        style={{ height: 100, width: 100 }}
                        />

                    <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 25 }}>Create Account</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Name"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            maxLength = {10}
                            onChangeText = {(name)=> setName(name)}
                        />
                        <TextInput
                           
                            style={styles.input}
                            placeholder="Phone Number"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor="#424242"
                            maxLength = {10}
                            onChangeText = {(num)=> numberValidation(num)}
                       />

                    {
                        numberError ? 
                        <Text style = {styles.errorStyle}> 
                            Enter Valid Number
                        </Text>
                        :
                        null
                    }
                        <TextInput
                            style={styles.input}
                            placeholder="Email Id"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            onChangeText = {(email)=> emailValidation(email)}

                        />

                    {
                        emailError ? 
                        <Text style = {styles.errorStyle}> 
                            Please enter a valid Mail Id
                        </Text>
                        :
                        null
                    }

                         <Text style={{ fontSize: 20, marginTop: 10 }}> Gender </Text>
                        {/* <View style={{ marginTop: 10 }}>
                            <RadioButton />


                        </View>  */}



                            <View style = {{flexDirection : "row"}}>
                                    <RadioButton
                                    value="Male"
                                    status={check === 'Male' ? 'checked' : 'unchecked'}
                                    onPress={() => { setCheck('Male') }}
                                    />
                                    <View>
                                        <Text style = {{fontSize : 15 , marginTop : 5}}>Male</Text>
                                    </View>
                                
                                    <RadioButton
                                    value="Female"
                                    status={check === 'Female' ? 'checked' : 'unchecked'}
                                    onPress={() => { setCheck('Female') }}
                                    />
                                    <View>
                                        <Text style = {{fontSize : 15,marginTop : 5}}>Female</Text>
                                    </View>
       
                               </View>


                           {/* <TextInput
                            require
                            style={styles.input}
                            placeholder="Enter Your Gender"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            onChangeText = {(gender)=> setGender(gender)}

                        /> */}

                        <TextInput
                            require
                            style={styles.input}
                            placeholder="Enter Your Age"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            maxLength = {2}
                            onChangeText = {(age)=> setAge(age)}

                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Password"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            onChangeText = {(pass)=> passwordValidation(pass)}
                        />

                    {
                        passwordError ? 
                        <Text style = {styles.errorStyle}> 
                            The password must contain atleast 7 characters
                        </Text>
                        :
                        null
                    }

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            onChangeText = {(con)=> confirmValidation(con)}

                        />

                {
                    confirmError ? 
                        <Text style = {styles.errorStyle}> 
                          Passwords didnt match.
                        </Text>
                        :
                        null
                    }
                       

                        <TouchableOpacity onPress={InsertDataToServer}>
                            <View style={styles.inputButton} >
                                <Text>Submit</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                            <View style = {{marginTop : 10}}>
                                <Text style = {{fontSize : 15}}>Click to Login Page</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAvoidingView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        // width: 350,
        // height: "8%",
        // borderColor: 'gray',
        // borderWidth: 2,
        // borderRadius: 10,
        // marginTop: 10,
        // textAlign: "center",
        // fontSize: 20
        width: 300,
        height: 40,
        backgroundColor: "#fff",
        margin: 5,
        padding: 8,
        color: "black",
        borderRadius: 14,
        fontSize: 15,
        fontWeight: "500",
        borderColor : "black",
        borderWidth : 1
    },
    inputButton: {
        borderRadius: 40,
        marginTop: 20,
        backgroundColor: "orange",
        width: 200,
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20

    },
    errorStyle : {
        fontSize : 15,
        color : 'red',
        alignSelf : 'center'
    }
});
