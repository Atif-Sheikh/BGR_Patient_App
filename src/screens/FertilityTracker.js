import React from 'react';
import { WebView } from 'react-native-webview';

// const ref = React.createRef();
 const FertilityTracker= () => {

    return (
     
            <WebView
      
             source={{ uri: 'http://gbr.thehoststudio.in/gbr/fertility_tracker.php' }}
       
        />
    );
  
}

export default FertilityTracker;