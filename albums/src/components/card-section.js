import React, {Component} from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
	const {sectionStyle} = styles;

	return (
		<View style={sectionStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	sectionStyle: {
		borderBottomWidth: 1,
		padding: 5,
		background: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection;
