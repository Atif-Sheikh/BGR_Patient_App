// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
// import {Card , CardItem , Body } from 'native-base';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//       selectedEndDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date, type) {
//     if (type === 'END_DATE') {
//       this.setState({
//         selectedEndDate: date 
//       });
//     } else {
//       this.setState({
//         selectedStartDate: date,
//         selectedEndDate: null,
//       });
//     }
//   }

//   render() {
//     const { selectedStartDate, selectedEndDate } = this.state;
//     const minDate = new Date(2000,1,1); // Today
//     const maxDate = new Date(2090, 6, 3);
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     const endDate = selectedEndDate ? selectedEndDate.toString() : '';

//     return (
//       <View style={styles.container}>
//         <Card style = {{backgroundColor : "#FFECB3"}}>
         
//         <CalendarPicker
//           style={{ color: "red" }}
//           startFromMonday={true}
//           allowRangeSelection={true}
//           minDate={minDate}
//           maxDate={maxDate}
//           todayBackgroundColor="#6d4c41"
//           selectedDayColor="#7300e6"
//           selectedDayTextColor="#FFFFFF"
//           onDateChange={this.onDateChange}
//           enableSwipe = {true}
       
//         />
//           </Card>

//          <Card  style = {{backgroundColor : "#B2EBF2" , padding : 5  , color : "white"}}>
//           <View style={styles.resultDay}>
//             <Text 
//             style= {{fontSize : 20,marginBottom:10 , fontWeight : "bold" , alignSelf : "center"}}>
//               PERIOD STATUS
//               </Text>
//             <Text>START DATE:   {startDate}</Text>
//             <Text>END   DATE:    {endDate}</Text>
          
//         </View>
//         </Card>


        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     marginTop: 20,
//   },
//   resultDay: {
//     paddingTop: 20
//   }
// });



import React from 'react';
import { WebView } from 'react-native-webview';
import { AsyncStorage } from 'react-native';

// const ref = React.createRef();
 class Periodtracker extends React.Component {
    
    componentDidMount(){
        this.getDataFromStorage();
    }; 

    getDataFromStorage = async () => {
        let number = await AsyncStorage.getItem("user_number");
        this.input.postMessage(number)
    };
    
    render() {
         return (
             // <WebView
             // ref={ref => (myWebView = ref)}
             // source={{ uri: "url" }}
             // onLoadEnd={() => myWebView.postMessage("test")}
             // />
                 <WebView
             //     ref = "myWebView"
                    ref={(input) => this.input = input}
                  source={{ uri: 'http://gbr.thehoststudio.in/gbr/period_tracker.php' }}
             //       onLoadEnd={() => myWebView.postMessage("test") }
             />
         );
     }
}

export default Periodtracker;

// http://gbr.thehoststudio.in/gbr/period_tracker.php