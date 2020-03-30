import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, ScrollView,AsyncStorage,Alert } from 'react-native';
import RadioButton from '../component/RadioButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditProfile = ({ navigation }) => {
  
    const [number , setNumber] = useState('');

    onUpdate = async ()=>{  
        try{  
          let user = await AsyncStorage.getItem('user_number');  
          setNumber(user); 
          
        }  
        catch(error){  
          Alert.alert(error);  
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
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            keyboardType={"default"}
                            placeholderTextColor="#424242"
                            autoCorrect={false}
                            clearTextOnFocus={true}
                            secureTextEntry={true}
                        />

                        
                              <View style={{ alignItems : "center" ,margin :10, flexDirection : "row" , justifyContent : "space-evenly"}}>
                                        <TouchableOpacity 
                                         style={{ width: "100%", color : "#fff",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={onUpdate} ><View ><Text style = {{fontSize : 20, marginHorizontal :15}}> Edit </Text></View> 
                                         </TouchableOpacity>

                                        <TouchableOpacity 
                                         style={{ width:"100%", color : "white",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={() => navigation.navigate('Home')} ><View ><Text style = {{fontSize : 20}}> Submit </Text></View>
                                        </TouchableOpacity>
                                        
                                    </View>
                  

                        <Text style={{ fontSize: 20, fontWeight: "bold" , marginTop : 5 }}>
                            Click to Add Spouse
                        </Text>
           
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Name"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor={"#424242"}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                        />
         
                   
                    
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Phone Number"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor={"#424242"}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                        />
                      
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Age"
                            keyboardType={"decimal-pad"}
                            placeholderTextColor={"#424242"}
                            autoCorrect={false}
                            clearTextOnFocus={true}
                        />
               

                   
                        <Text style={{ fontSize: 20, }}> Gender </Text>
                    
                        <RadioButton />


                                    <View style={{ alignItems : "center" ,marginHorizontal :10, flexDirection : "row" , justifyContent : "space-evenly"}}>
                                        <TouchableOpacity 
                                         style={{ width: "100%", color : "#fff",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={onUpdate} ><View ><Text style = {{fontSize : 20, marginHorizontal :15}}> Edit </Text></View> 
                                         </TouchableOpacity>

                                        <TouchableOpacity 
                                         style={{ width:"100%", color : "white",backgroundColor : "orange",borderRadius: 20 }}
                                         onPress={() => navigation.navigate('Home')} ><View ><Text style = {{fontSize : 20}}> Submit </Text></View>
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
