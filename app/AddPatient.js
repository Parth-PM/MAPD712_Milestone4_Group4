import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


let AddPatient = null;

export default AddPatient = ({ navigation }) => {

  const [emaildId, onChangeText1] = React.useState(null);
  const [password, onChangeText2] = React.useState(null);

  const [patient_name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [age, setAge] = React.useState('');
  const [contact_no, setContact] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [doctor, setDoctor] = React.useState('');

  const getDataUsingPost = () => {
    console.log("post method")
  
    //POST json
    var dataToSend = {
      "patient_name": patient_name,
      "address": address,
      "age": age,
      "contact_no": contact_no,
      "department": department,
      "doctor": doctor
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://192.168.2.23:8000/patients', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  /*const btnPressed= () =>
  getDataUsingPost()
  Alert.alert(
    "Success",
    "Record Added Successfully",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );*/
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkBackground}>
            <Text style={styles.logo}>Patient Clinical Information</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>Patient Name: </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={patient_name}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Address: </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setAddress(text)}
                value={address}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Age: </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setAge(text)}
        value={age}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Contact Number: </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setContact(text)}
                value={contact_no}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Department </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDepartment(text)}
                value={department}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Doctor </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDoctor(text)}
                value={doctor}
                />
          </View>

        
        
          <View style={styles.button}>
        <TouchableOpacity style={styles.button} onPress={() => { getDataUsingPost(), navigation.navigate("ViewPatient") }}>
       <Text style={styles.btntext}>Save</Text>
     </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  logo: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    width: 100,
    margin: 12,
  },
  input: {
    height: 40,
    width: 220,
    margin: 10,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
  },
  darkBackground: {
    backgroundColor: '#2645B1',
  },
  lightBackground: {
    backgroundColor: '#D8E0FF',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#2645B1',
    width: 220,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
});
