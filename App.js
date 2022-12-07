/**
 * MAPD712 - milestone3 

 * Khushboo Kodwani    301273818
 * Parth Maru          301209761


 */import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 
 
 import HomePage from './app/HomePage';
 import LoginPage from './app/LoginPage';
 import ViewPatient from './app/ViewPatient';
 import AddPatient from './app/AddPatient';
 import ViewAllPatient from './app/ViewAllPatient';
 import AddTestRecord from './app/AddTestRecord';
 import ViewTestRecord from './app/ViewTestRecord';
import CriticalPatients from './app/CriticalPatients';

 const MyStack = createNativeStackNavigator();
 
 
 export default function App() {
   return (
       <NavigationContainer>
         <MyStack.Navigator>
           <MyStack.Screen name="LoginPage" component={LoginPage} options={{
             headerShown: false
           }}/>
           <MyStack.Screen name="HomePage" component={HomePage} options={{
             headerShown: false
           }}/>
         
           <MyStack.Screen name="AddPatient" component={AddPatient}/>
           <MyStack.Screen name="ViewPatient" component={ViewPatient}options={{
             headerShown: false

           }}/>
           <MyStack.Screen name="ViewAllPatient" component={ViewAllPatient}options={{
            headerShown: false

           }}/>
           <MyStack.Screen name="AddTestRecord" component={AddTestRecord}options={{
             headerShown: false

           }}/>
           <MyStack.Screen name="ViewTestRecord" component={ViewTestRecord}options={{
            headerShown: false

           }}/>
                <MyStack.Screen name="CriticalPatients" component={CriticalPatients}options={{
            headerShown: false

           }}/>

         </MyStack.Navigator>
       </NavigationContainer>
     );
   }
   
 
 
 