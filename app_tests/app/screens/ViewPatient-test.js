import 'react-native';
import * as React from 'react';
import ViewPatient from '../../../app/screens/ViewPatient';
import renderer from 'react-test-renderer';


it('renders correctlu', () => {
    const Hello = renderer.create(<ViewPatient />);
});