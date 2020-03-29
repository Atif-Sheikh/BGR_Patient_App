import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground , ScrollView} from 'react-native';
import { Button } from 'native-base';
import RadioButton from '../component/RadioButton';

const AddSpouse = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/blo.png')} style={{ height: "100%", width: "100%" }}>
          <ScrollView>
            <View style={styles.container}>
               <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Add Spouse
                 </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Spouse Name"
                    keyboardType={"default"}
                    placeholderTextColor={"#424242"}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number"
                    keyboardType={"decimal-pad"}
                    placeholderTextColor={"#424242"}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    keyboardType={"default"}
                    placeholderTextColor={"#424242"}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Age"
                    keyboardType={"decimal-pad"}
                    placeholderTextColor={"#424242"}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />


                <Text style={{ fontSize: 20, marginTop: 10 }}> Gender </Text>

                <View style={{ marginTop: 10 }}>
                    <RadioButton />
                </View>

                <View style={{ flex: 1}}>
                    <Button rounded primary
                        style={{ width: 50, marginRight: 5 }}
                        onPress={() => navigation.navigate('Home')}
                    ><Text style={{ color: "#fff"   , alignSelf : "center" }}>Update</Text></Button>
                    <Button rounded dark
                        style={{ width: 50, marginRight: 5 }}
                        onPress={() => navigation.navigate('Home')}
                    ><Text style={{ color: "#fff" , alignSelf : "center"  }}>Submit</Text></Button>
                 </View>

            </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 30
    },
    input: {
        width: 300,
        height: "7%",
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        textAlign: "center",
        fontSize: 20
    }
});

export default AddSpouse;
