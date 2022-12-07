import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { id } from './ViewPatient';


let AddTestRecord = null;

export default AddTestRecord = ({ navigation }) => {


  const [nurse_name, setName] = React.useState('');
  const [iscritical, setCritical] = React.useState(false);
  const [blood_pressure, setPressure] = React.useState('');
  const [Respiratory_rate, setResp] = React.useState('');
  const [blood_oxygen, setOxygen] = React.useState('');
  const [heart_rate, setHeart] = React.useState('');

  const getDataUsingPost = () => {
    console.log("post method")
    const current = new Date();


    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = `${current.toLocaleTimeString("en-US", {hour: "2-digit",minute: "2-digit"})}`;

      console.log(iscritical)
    //POST json
    var dataToSend = {
      "patient_id": id,
      "nurse_name": nurse_name,
      "date": date,
      "time": time,
      "blood_pressure": blood_pressure,
      "Respiratory_rate": Respiratory_rate,
      "blood_oxygen": blood_oxygen,
      "heart_rate": heart_rate,
      "critical_condition": iscritical
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
    fetch('http://192.168.2.23:8000/patients/:id/tests', {
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
        <Text style={styles.logo}>Patient Record</Text>
      </View>

      <View style={styles.lightBackground}>
        <View style={styles.body}>
          <Text style={styles.label}>Nurse Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            value={nurse_name} />
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Blood Pressure: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPressure(text)}
            value={blood_pressure} />
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Respiratory rate :</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setResp(text)}
            value={Respiratory_rate} />
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Blood Oxygen: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setOxygen(text)}
            value={blood_oxygen} />
        </View>

        <View style={styles.body}>
          <Text style={styles.label}>Heart Rate: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setHeart(text)}
            value={heart_rate} />
        </View>
        <View style={styles.checkboxContainer}>

          <CheckBox style={styles.checkbox}

            value={iscritical}

            onValueChange={setCritical} />

          <Text style={styles.label}>Is Critical?</Text>

        </View>



        <View style={styles.button}>
          <TouchableOpacity style={styles.button} onPress={() => { getDataUsingPost(), navigation.navigate("ViewTestRecord") }}>
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
    marginTop: 60,
    marginBottom: 20,
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
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 23
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    marginLeft: 12,
  },


});
