import 'react-native';
import * as React from 'react';
import AddPatient from '../../../app/AddPatient';
import renderer from 'react-test-renderer';


it('renders correctlu', () => {
    const Hello = renderer.create(<AddPatient />);
});