import React from 'react';
import Home from './Home';
import Appointment from './src/screens/Appointment';
import EditProfile from './src/screens/EditProfile';



import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


export default class App extends React.Component {




  render() {
    return (
     <Home/>
  //  <Fire/>
    // <EditProfile/>
    // <Sample/>
    );
  } 
}
  /*
  import React, { Component } from 'react';
 
  import { StyleSheet, View, Text, Platform } from 'react-native';
   
  import AppIntroSlider from 'react-native-app-intro-slider';
   
  export default class App extends Component {
   
    constructor(props) {
      super(props);
      this.state = {
   
        show_Main_App: false
   
      };
    }
   
    on_Done_all_slides = () => {
      this.setState({ show_Main_App: true });
    };
   
    on_Skip_slides = () => {
      this.setState({ show_Main_App: true });
    };
    render() {
      if (this.state.show_Main_App) {
        return (
         <Navigation/>
        );
      } else {
        return (
          <AppIntroSlider
            slides={slides}
            onDone={this.on_Done_all_slides}
            showSkipButton={true}
            onSkip={this.on_Skip_slides}
          />
        );
      }
    }
  }
  const styles = StyleSheet.create({
   
    MainContainer: {
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    title: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain'
    }
  });
   
  const slides = [
    {
      key: 'k1',
      title: 'Period Tracker',
      text: 'Track your Period',
      image:  require('./assets/calendar.png'),
           
        //uri:
          //'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
          
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#FF1744',
    },
    {
      key: 'k2',
      title: 'BMI Calculator',
      text: 'Check your BMI',
      image: require('./assets/calculator.png'),
      
     // {
       // uri:
         // 'https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png',
      
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#D500F9',
    },
    {
      key: 'k3',
      title: 'Fertility Tracker',
      text: 'Check it Out',
      image: require('./assets/chart.png'),
      //image: {
        //uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/computer.png',
      //},
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#2979FF',
    },
    {
      key: 'k4',
      title: 'Appointment',
      text: ' Book your Slot',
      image: require('./assets/appoint.png'),
      //image: {
       // uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/flight.png',
      //},
      titleStyle: styles.title,
      textStyle: styles.text,
      imageStyle: styles.image,
      backgroundColor: '#1DE9B6',
    }
  ];
  */