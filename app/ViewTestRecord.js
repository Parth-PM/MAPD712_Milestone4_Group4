
 import React from "react";
 import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
 import { TouchableWithoutFeedback } from "react-native-gesture-handler";
 import { useState, useEffect } from "react";
 import { useRoute } from '@react-navigation/native';
import { id } from "./ViewPatient";
 
 
 export default ViewTestRecord = ({ route, navigation }) => {

  const _id = id
  console.log(_id)
 
   const ItemSeparator = () => {
     return <View style={{
       height: 1,
       backgroundColor: "#d68227",
       marginHorizontal: 10
     }}
     />;
   };
 
   const ListEmpty = () => {
     return (
       <View style={{ alignItems: "center" }}>
         <Text style={styles.item}>No data found</Text>
       </View>
     );
   };
 
   const [data, setData] = useState([]);
 
   const fetchData = async () => {
     const resp = await fetch("http://192.168.2.23:8000/patients/"+_id+"/tests");
     const data = await resp.json();
     setData(data);
     console.log(data)
   };
 
   useEffect(() => {
     fetchData();
     const willFocusSubscription = navigation.addListener('focus', () => {
       fetchData();
     });
     return willFocusSubscription;
   }, []);
   
   return (
    <SafeAreaView style={styles.container}>
         <View style={styles.darkBackground}>
             <Text style={styles.logo}>Patient Health Record</Text>
         </View>
        
         <FlatList
        data={data}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("AddTestRecord")}>
            
            <View style={styles.body}>
         <Text style={styles.labels}>Date: {item.date}</Text>
            <Text style={styles.labels}>Time: {item.time}</Text>
            <Text style={styles.labels}>Nurse Name: {item.nurse_name}</Text>
            <Text style={styles.labels}>Blood Pressure: {item.blood_pressue}</Text>
            <Text style={styles.labels}>Respiratory Rate: {item.respiratory_rate}</Text>
            <Text style={styles.labels}>Blood Oxygen: {item.blood_oxygen}</Text>
            <Text style={styles.labels}>Heart Rate: {item.heart_rate}</Text>

          </View>


          </TouchableWithoutFeedback>}
          
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        
      />
         
           <View style={styles.button}>
         <TouchableOpacity
           onPress={() => navigation.navigate('AddTestRecord')}>
           <Text style={styles.buttonText}>Add Test Record</Text>         
         </TouchableOpacity>
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
    // flexDirection: 'row',
   },
   logo: {  
     fontSize: 32,
     color: 'white',
     marginTop:60,
     marginBottom:20,
     marginLeft: 20,
     fontWeight: "bold",
     textAlign: 'center',
   },
   labels: {
    // fontSize: 20,
   //  width: 88,
   //  margin: 10,
   //  color: 'white',
    // borderRadius: 10,
    // backgroundColor: '#2645B1',
    // textAlign: 'center',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    fontSize: 20,
    },
   item: {
    fontSize: 14,
    width: 88,
    margin: 10,
    paddingBottom: 9,
    paddingTop: 9,
    textAlign: 'center',
    backgroundColor: '#D8E0FF',
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
     alignItems: 'center',
     borderRadius: 20,
     margin: 30,
     padding: 20,
   },
   button: {
     backgroundColor: '#2645B1',
     width: 180,
     height: 40,
     marginTop: 20,
     borderRadius: 10,
     alignSelf:'center'
   },
   buttonText: {
     color: 'white',
     fontSize: 16,
     textAlign: 'center',
     padding: 9,
   },
 });