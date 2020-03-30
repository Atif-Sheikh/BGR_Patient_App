import React from 'react';
import { WebView } from 'react-native-webview';
import { AsyncStorage, View } from 'react-native';

// const ref = React.createRef();
class FertilityTracker extends React.Component {

    state = {
        number: null
    }
    
    componentDidMount(){
        this.getDataFromStorage();
    }; 

    getDataFromStorage = async () => {
        let number = await AsyncStorage.getItem("user_number");
        // this.input.postMessage(number)
        this.setState({ number });
    };
    
    render() {
        const { number } = this.state;

        if(number){
            return <WebView
                ref={(input) => this.input = input}          
                source={{ uri: `http://gbr.thehoststudio.in/gbr/fertility_tracker.php?pat_phone=${number}` }}
            />
        }

        
        return <View />
    }
}

export default FertilityTracker;