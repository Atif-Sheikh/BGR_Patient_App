import React ,  {useState} from "react";
import { Text, ImageBackground , Alert } from 'react-native';
import { Container, Content, Textarea, Form, Button, Item, Input } from "native-base";

const Feedback = () => {

  const [name , setName] = useState('');
  const [phone,setPhone] = useState('');
  const [feedbacks , setFeedbacks] = useState("");


  InsertDataToServer = () =>
      { 
           if(name.trim() === "" || phone.trim().length < 10 || feedbacks.trim() === "" || phone.trim().length > 10 ) {
              Alert.alert("All fields are mandatory");
           } else {
  
  fetch('http://gbr.thehoststudio.in/gbr/feed.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
 
    body: JSON.stringify({
  
      feed_name: (name),
  
      feed_phone: (phone),
  
      feedback : (feedbacks)

    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson == "Your Feedback was Entered Successfully!!."){
            Alert.alert(responseJson);
          setName(''); 
          setPhone('');
          setFeedbacks('');

          }else {
            Alert.alert("Something Error");
          }
  
  // Showing response message coming from server after inserting records.
          
  
        }).catch((error) => {
          console.error(error);
        });
   
   
    };
  }

  return (
    <ImageBackground source={require('../../assets/backlogo2.png')} style={{ height: "100%", width: "100%", elevation: 20 }}>
      <Container>
       
        <Content padder>
          <Form>
            <Item style = {{margin : 5}} regular>
              <Input 
              placeholder='Enter Name'
              onChangeText={(nam)=>setName(nam)} />
            </Item>
            <Item style = {{margin : 5}} regular>
              <Input 
              placeholder='Enter Phonenumber'
              onChangeText={(phon)=>setPhone(phon)} />
            </Item>
            <Textarea style = {{fontSize : 18}} rowSpan={5} bordered 
            placeholder="Feedback about App" 
            onChangeText = {(text)=>setFeedbacks(text)}/>

          </Form>

          <Button  style = {{margin : 5}}  rounded block  onPress = {InsertDataToServer}><Text>Submit</Text></Button>

        </Content>
      </Container>
    </ImageBackground>
  );

}



export default Feedback;