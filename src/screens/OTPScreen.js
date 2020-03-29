import React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import OtpInputs from "react-native-otp-inputs";


const OTPScreen = ({ navigation }) => {
    otpRef = React.createRef();


    resetOTP = () => {
        otpRef.current.reset();
    };


    return (
        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" }}>
            <View style={styles.container}>
                <OtpInputs
                    ref={otpRef}
                    handleChange={code => console.log(code)}
                    numberOfInputs={4}
                    secureTextEntry={true}
                />
                <View style={styles.buttonStyle}>
                    <TouchableOpacity onPress={this.resetOTP}>
                        <Text style={styles.textStyle}>
                            Reset
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingLeft: 40 }} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.textStyle}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50


    },
    buttonStyle: {
        paddingBottom: 400,
        flexDirection: "row"

    },
    textStyle: {
        fontSize: 20
    }

}
);
export default OTPScreen;
