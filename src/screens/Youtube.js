import React from 'react';
import { WebView } from 'react-native-webview';

 const Youtube = () => 
  {
    return (
            <WebView source={{ uri: 'https://www.youtube.com/' }} />
    );
  
}

export default Youtube;
