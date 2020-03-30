import React from 'react';
import { WebView } from 'react-native-webview';
import { AsyncStorage } from 'react-native';

// const ref = React.createRef();
class FertilityTracker extends React.Component {
    
    componentDidMount(){
        this.getDataFromStorage();
    }; 

    getDataFromStorage = async () => {
        let number = await AsyncStorage.getItem("user_number");
        this.input.postMessage(number)
    };
    
    render() {
        return (
                <WebView
                    ref={(input) => this.input = input}          
                    source={{ uri: 'http://gbr.thehoststudio.in/gbr/fertility_tracker.php' }}
                />
        );
    }
}

export default FertilityTracker;