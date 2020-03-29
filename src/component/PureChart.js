import React from 'react';
import PureChart from 'react-native-pure-chart';

export default class chart extends React.Component {
render(){
 
    let sampleData = [
        {
          value: 5,
          label: 'High Chance of Getting Pregnant',
          color: 'green',
        }, {
          value: 5,
          label: 'Medium Chance of Getting Pregnant',
          color: 'orange'
        }, {
          value: 2,
          label: 'Low Chance of Getting Pregnant',
          color: 'red'
        }]

return(
   //<View style = {{marginTop : 20, alignItems : "center" , justifyContent : "center"}}>
            <PureChart 
            style = {{alignItems : "center" , justifyContent : "center"}}
            width={'100%'}
            height={200}
            data={sampleData}
             type='pie' />
 //</View>
);
}
}
