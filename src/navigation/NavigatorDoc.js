import * as React from 'react';
import {TouchableOpacity,AsyncStorage} from 'react-native';
import { NavigationContainer , DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
     } from '@react-navigation/drawer'


import MenuScreen from '../screens/MenuScreen';
import Login from '../screens/LoginPage';
import BMITracker from '../screens/BMITracker';
import Signup from '../screens/SignupPage';
import OTP from '../screens/OTPScreen';
import Forgot from '../screens/ForgotPassword';
import Appointment from '../screens/Appointment';
import Calender from '../screens/Calender';
import EditProfile from '../screens/EditProfile';
import Feedback from '../screens/FeedbackForm';
import Connection from '../screens/Connection';
import Face from '../screens/Facebook';
import You from '../screens/Youtube';
import Fertile from '../screens/FertilityTracker';







import Icons from 'react-native-vector-icons/FontAwesome';
import Log from 'react-native-vector-icons/AntDesign';
import AddSpouse from '../screens/AddSpouse';

const Stack = createStackNavigator();
const Drawer= createDrawerNavigator(); 




function LogoTitle() {
    return (
     
      <Icons  name="bars" size={30} color="white" />
    
     );
  }

  function Logoff() {
    return (
     
      <Log  name="logout" size={30} color="white" />
    
     );
  } 

  // logout = async(navigation) => {
   
  //   try {
  //       await AsyncStorage.removeItem(user_number);
        
        
  //       return true;
  //   }
  //   catch(exception) {
  //     navigation.navigate('LoginScreen');
  //       return false;
  //   }
  // }

export default function DocNavigator() {




createHomeStack = ({navigation}) =>


      
      <Stack.Navigator >
           <Stack.Screen 
                name="LoginScreen"
                component={Login} 
                options={{
                        headerShown  : false ,
                   
                        headerRight:(props) => (
                          <TouchableOpacity  
                          style = {{marginRight: 10 }}   
                          onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                          <LogoTitle
                           {...props}
                         />
                         </TouchableOpacity>
                            ),
                    headerTitle:'Login', 
                    headerStyle: 
                            {
                            backgroundColor: '#008687'
                          
                            },
                    headerTintColor: 'black',
                    headerTitleStyle: 
                            {
                            fontWeight: 'bold',
                            fontSize : 25,
                            color : "#fff"
                           
                       
                            },
                            headerTitleAlign : 'center'
                            }}
            /> 
           

          <Stack.Screen 
                name="Home"
                component={MenuScreen} 
                options={{
                    title: 'Home',
                    headerLeft:(props) => (
                        <TouchableOpacity  
                        style = {{marginLeft: 10 }}   
                        onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                        <LogoTitle
                         {...props}
                       />
                       </TouchableOpacity>
                          ),
                          headerRight:(props) => (
                            <TouchableOpacity  
                            style = {{marginRight: 10 }}   
                            onPress={()=>navigation.navigate('LoginScreen')}>
                            <Logoff
                             {...props}
                           />
                           </TouchableOpacity>
                              ),
                    headerStyle: 
                            {
                            backgroundColor: '#008687'
                            },
                    headerTintColor: '#fff',
                    headerTitleStyle: 
                            {
                            fontWeight: 'bold',
                            fontSize : 20,
                            color : "#fff"
                            },
                            headerTitleAlign : 'center'
                            }}
            /> 
            <Stack.Screen name="BMITracker" 
            component={BMITracker} 
            options={{
                title: 'BMI Calculator',
                headerStyle: {
                  backgroundColor: '#008687',
            
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff"
                  },
                  headerTitleAlign : 'center'
                 }}
                 />

        <Stack.Screen name="OTP" 
            component={OTP} 
            options={{
              title: 'Verify your Account',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
            <Stack.Screen name="Signup" 
            component={Signup} 
            options={{
              title: 'SignUp',
              headerShown  : false ,
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
            <Stack.Screen name="Forgot" 
            children={Forgot} 
            options={{
              title: 'Forgot Password',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
            <Stack.Screen name="Appointment" 
            component={Appointment} 
            options={{
              title: 'Choose Your Date & Time',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
            <Stack.Screen name="Calender" 
            component={Calender} 
            options={{
              title: 'Chose Your LMP Date',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
              <Stack.Screen name="Edit" 
            component={EditProfile} 
            options={{
              title: 'Edit Profile',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
             <Stack.Screen name="Feedback" 
            component={Feedback} 
            options={{
              title: 'FeedBack Form',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
        
           <Stack.Screen name="Connection" 
              component={Connection} 
              options={{
                title: 'Connect with Us',
                headerTitleAlign : 'center',
                headerStyle: {
                  backgroundColor: '#008687',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff",
                }}}
              />
            
            <Stack.Screen name="AddSpouse" 
              component={AddSpouse} 
              options={{
                title: 'Add Spouse',
                headerTitleAlign : 'center',
                headerStyle: {
                  backgroundColor: '#008687',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff",
                }}}
              />

              <Stack.Screen name="Youtube" 
              component={You} 
              options={{
                title: 'Youtube',
                headerTitleAlign : 'center',
                headerStyle: {
                  backgroundColor: '#008687',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff",
                }}}
              />

              <Stack.Screen name="Facebook" 
              children={Face} 
              options={{
                title: 'Facebook',
                headerTitleAlign : 'center',
                headerStyle: {
                  backgroundColor: '#008687',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff",
                }}}
              />
               <Stack.Screen name="Fertility" 
            component={Fertile} 
            options={{
              title: 'Chose Your LMP Date',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#008687',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
          </Stack.Navigator>
        
        

        return (
                <NavigationContainer >
                    <Drawer.Navigator initialRouteName="Home" >
                        <Drawer.Screen  name="Home" component={createHomeStack} />
                      
                    </Drawer.Navigator>
                </NavigationContainer>
  );
}