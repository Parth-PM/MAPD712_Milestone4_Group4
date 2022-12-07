import 'react-native';
import * as React from 'react';
import RecordData from '../../../app/screens/RecordData';
import renderer from 'react-test-renderer';


it('renders correctlu', () => {
    const Hello = renderer.create(<RecordData />);
});