import 'react-native';
import * as React from 'react';
import PatientData from '../../../app/screens/PatientData';
import renderer from 'react-test-renderer';


it('renders correctlu', () => {
    const Hello = renderer.create(<PatientData />);
});