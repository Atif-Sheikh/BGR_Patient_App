import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, ScrollView,AsyncStorage,Alert } from 'react-native';
import RadioButton from '../component/RadioButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditProfile = ({ navigation }) => {
  
    const [number , setNumber] = useState('');
    const [state, setState] = useState({
        spouse_name: '',
        spouse_phone: '',
        spouse_age: '',
        spouse_gender: 'Male',

        password: '',
        confirmPassword: ''
    });

    onUpdate = async ()=>{  
        try{  
          let user = await AsyncStorage.getItem('user_number');  
          setNumber(user); 
          
        }  
        catch(error){  
          Alert.alert(error);  
        }  
      }  
     
    useEffect(() => {
        setData();
    }, []);

    async function updateSpouse() {
        const { spouse_name, spouse_age, spouse_phone, spouse_gender } = state;

        if(spouse_name && spouse_age && spouse_phone && spouse_gender) {

            fetch('http://gbr.thehoststudio.in/gbr/update.php', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                    "pat_phone": number,
                    "spouse_name": spouse_name,
                    "spouse_phone": spouse_name,
                    "spouse_gender": spouse_gender,
                    "spouse_age": spouse_age
                }
              )
            }).then((response) => {
                navigation.navigate('Home');
                Alert.alert('Successfully added the spouse!');
            })
    
        }else {
            Alert.alert("All fields are required!");
        }
    }

    async function updatePassword() {
        const { password, confirmPassword } = state;

        if(password && confirmPassword && password === confirmPassword && password.length > 6) {


            fetch('http://gbr.thehoststudio.in/gbr/edit.php', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                    "pat_phone": number,
                    "pat_pass": password,
                    "pat_conpass": confirmPassword
                }
              )
            }).then((response) => {
                navigation.navigate('Home');
                Alert.alert('Password successfully updated!');
            })

        } else if(password.length < 7){
            Alert.alert('Password must be contains more than 6 characters!');
        } else if(password !== confirmPassword) {
            Alert.alert("Both password must be same!");
        } else {
            Alert.alert('Please enter correct password!');
        }
    }

    async function setData() {
        try {
            
            let number = await AsyncStorage.getItem('user_number');
            let name = await AsyncStorage.getItem("userName");
            this.setState({ names: name, number: number });
    
        }catch(err) {
            console.log(err, "ERR");
        }
    }

  

    return (
  
        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" }}>
                     
      
                <View style={styles.container}>
                  
                     
                        <TextInput
                            require
                            style={styles.input}
                            placeholder="Edit Number"
                            value = {number}
                            keyboardType={"decimal-pad"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            editable = {false}
                        />
                      
                        <TextInput
                            style={styles.input}
                            placeholder="Change Password"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            value={state.password}
                            onChangeText={(text) => setState({ ...state, password: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                            value={state.confirmPassword}
                            onChangeText={(text) => setState({ ...state, confirmPassword: text })}
                        />

                        
                              <View style={{ alignItems : "center" ,margin :10, flexDirection : "row" , justifyContent : "space-evenly"}}>
                                        <TouchableOpacity 
                                         style={{ width: "100%", color : "#fff",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={onUpdate} ><View ><Text style = {{fontSize : 20, marginHorizontal :15}}> Edit </Text></View> 
                                         </TouchableOpacity>

                                        <TouchableOpacity 
                                         style={{ width:"100%", color : "white",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={() => updatePassword()} ><View ><Text style = {{fontSize : 20}}> Submit </Text></View>
                                        </TouchableOpacity>
                                        
                                    </View>
                  

                        <Text style={{ fontSize: 20, fontWeight: "bold" , marginTop : 5 }}>
                            Click to Add Spouse
                        </Text>
           
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Name"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            value={state.spouse_name}
                            onChangeText={(text) => setState({ ...state, spouse_name: text })}
                        />
         
                   
                    
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Phone Number"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor={"#424242"}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            value={state.spouse_phone}
                            onChangeText={(text) => setState({ ...state, spouse_phone: text })}
                        />
                      
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Age"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor={"#424242"}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            value={state.spouse_age}
                            onChangeText={(text) => setState({ ...state, spouse_age: text })}
                        />
               

                   
                        <Text style={{ fontSize: 20, }}> Gender </Text>
                    
                        <RadioButton changeGender={(val) => setState({ ...state, spouse_gender: val })} checked={state.spouse_gender} />


                                    <View style={{ alignItems : "center" ,marginHorizontal :10, flexDirection : "row" , justifyContent : "space-evenly"}}>
                                        <TouchableOpacity 
                                         style={{ width: "100%", color : "#fff",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={onUpdate} ><View ><Text style = {{fontSize : 20, marginHorizontal :15}}> Edit </Text></View> 
                                         </TouchableOpacity>

                                         <TouchableOpacity 
                                         style={{ width:"100%", color : "white",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={() => updateSpouse()} ><View ><Text style = {{fontSize : 20}}> Submit </Text></View>
                                        </TouchableOpacity>
                                    </View>
            </View>
         

        </ImageBackground>
          

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    input: {
        width: 300,
        height: "7%",
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        textAlign: "center",
        fontSize: 20
    }
});

export default EditProfile;
