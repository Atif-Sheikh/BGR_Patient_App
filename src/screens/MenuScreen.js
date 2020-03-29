import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,Alert, TouchableOpacity, TouchableHighlight,AsyncStorage, ImageBackground, SafeAreaView ,Image , Platform , Dimensions} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import CardSection from "../component/CardSection";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ent from 'react-native-vector-icons/Entypo';
import Fontist from 'react-native-vector-icons/MaterialCommunityIcons';
import Cal from 'react-native-vector-icons/Feather';
import CR from 'react-native-vector-icons/Entypo';
import CRO from 'react-native-vector-icons/Entypo';


var Advert = Dimensions.get('window').height;

const getFonts = () => Font.loadAsync({
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'Pacifico-Regular': require('../../assets/fonts/Pacifico-Regular.ttf')
})

const MenuScreen = ({ navigation  }) => {
  // const { params } = navigation.state;
  // // id = this.props.navigation.state.params.id;
  // // const {state} = navigation;
  // console.log("PROPS " , params);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [storeName , setStoreName] = useState("");

  // displayData = async ()=>{  
  //   try{  
  //     let user = await AsyncStorage.getItem('user_number');  
  //     Alert.alert(user); 
  //     console.log(user); 
  //   }  
  //   catch(error){  
  //     Alert.alert(error);  
  //   }  
  // }  
   


  onSal = () => {

    setLoading(true);

}



  if (fontsLoaded) {

    if(!loading) {
      return (
      <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }} onPress={onSal} >
      <CRO name="cross" size={20} color="#000" style={{ alignContent: "flex-end", marginLeft: 280 }} />

      <View><Image source={require('../../assets/ad2.png')} style={{ height: 550, width: 300 }} /></View>

     </TouchableOpacity>);
    } else {

    return (
      <SafeAreaView>

        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" ,elevation : 20}}>



          <View style={styles.container}>

            <View style = {{margin : 20}}>
                <TouchableOpacity style = {styles.profileStyle} onPress = {()=> navigation.navigate('Edit')}>
                  <Text style = {styles.profileTextStyle}>Profile Update</Text>
                </TouchableOpacity>
            </View>
           


            <View style={{ flexDirection: "row", marginBottom: 30, paddingTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('BMITracker')}>
                <CardSection >
                  <View style={styles.button}>
                  <Icon name="weight" size={40} color="orange" />
                    <Text style={styles.buttonText}>BMI{`\n`}TRACKER </Text>
                  </View>
                </CardSection>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
                <CardSection>
                  <View style={styles.button}>
                      <Ent name="pie-chart" size={40} color="green" />
                      <Text style={styles.buttonText}>PERIOD{`\n`}TRACKER </Text>
                  </View>
                </CardSection>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress = {()  => navigation.navigate('Fertility')}>
                <CardSection>
                  <View style={styles.button}>
                      <Cal name="calendar" size={40} color="blue" />
                      <Text style={styles.buttonText}>FERTILITY{`\n`}TRACKER </Text>
                  </View>
                </CardSection>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Appointment')}>
                <CardSection>
                  <View style={styles.button}>
                      <Fontist name="doctor" size={40} color="red" />
                      <Text style={styles.buttonText}>BOOK{`\n`} APPOINTMENT</Text>
                  </View>
                </CardSection>
              </TouchableOpacity>
            </View>

            <View style = {{margin : 20}}>
                <TouchableOpacity style = {styles.profileStyle} onPress = {()=> navigation.navigate('Connection')}>
                  <Text style = {styles.profileTextStyle}>Connect with GBR</Text>
                </TouchableOpacity>
            </View>
              
            <View style = {{marginTop : 10,flex : 1 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
              <CR name="cross" size={20} color="#000" style={{ alignContent: "flex-end", marginLeft: 360 }} />
              <View><Image source={require('../../assets/ad1.jpg')} style={{ height: 80, width: 600 }} /></View>
            </TouchableOpacity>
            </View>

            

          </View>

        </ImageBackground>
      </SafeAreaView>

    );
  }
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );

  }

}

export default MenuScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 20,

  },
  button: {
    marginBottom: 0,
    width: 160,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor : "#008687",
    flexDirection : "row",
    padding : 10

  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontSize: 12,
    fontFamily: "OpenSans-Bold"
  },

  profileStyle : {
    backgroundColor : "#008687" , 
    width : 280 , 
    borderRadius : 20 ,
    shadowOpacity : 10 , 
    shadowOpacity : 0.5,
    elevation : 2,
    justifyContent : "center", 
    alignItems : "center"
   },

   profileTextStyle  : {
        fontSize : 25,
        color: "#fff" ,
        alignItems : "center" , 
        justifyContent : "center" ,  
        padding : 5
 }

  
});