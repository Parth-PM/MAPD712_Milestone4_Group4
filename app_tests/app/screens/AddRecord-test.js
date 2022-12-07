import 'react-native';
import * as React from 'react';
//import 'react-native';

//import React  from 'react'
import AddRecord from '../../../app/screens/AddRecord';
import renderer from 'react-test-renderer';
//import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';

//import {getDBConnection, createTable, saveToDoItems, deleteTable, GetPatientById} from '../../models/db-service';


it('renders correctlu', () => {
    const Hello = renderer.create(<AddRecord />);
});