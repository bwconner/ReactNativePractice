import React from 'react';
import {AppRegistry, Text} from 'react-native';
import Header from './src/components/header';

const App = () => (
	<Header headerText="Albums"/>
);

AppRegistry.registerComponent('albums', () => App);
