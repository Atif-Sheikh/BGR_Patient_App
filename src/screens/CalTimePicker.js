import React, { useState } from "react";
import { Button, View,Alert,Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const CalTimePicker = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = datetime => {
    Alert.alert("Your Slot has been booked on: "+ datetime);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date & Time Picker" onPress={showDatePicker} />
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
       <Text> Your Slot has been booked on: </Text>
    </View>
   
  );
};

export default CalTimePicker;