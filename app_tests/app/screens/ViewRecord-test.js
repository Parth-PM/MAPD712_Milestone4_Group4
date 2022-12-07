import 'react-native';
import * as React from 'react';
import ViewRecord from '../../../app/screens/ViewRecord';
import renderer from 'react-test-renderer';


it('renders correctlu', () => {
    const Hello = renderer.create(<ViewRecord />);
});