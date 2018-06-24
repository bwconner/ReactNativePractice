import React, {Component} from 'react';
import {Text} from 'react-native';

const Button = (props) => {
	const {buttonStyle} = styles;

	return (
		<Text style={buttonStyle}>
			Buy Now
		</Text>
	);
};

const styles = {
	buttonStyle: {
		justifyContent: 'center'
	}
};

export default Button;
