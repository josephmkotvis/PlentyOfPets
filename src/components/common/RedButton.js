import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const RedButton = ( { onPress, children } ) => {
		const { 
			textStyle,
			buttonStyle
		} = styles;

	return (
		<TouchableOpacity
		 onPress = {onPress}
		 style = {buttonStyle}
		 >
		<Text style = {textStyle}> {children} </Text>
		</TouchableOpacity>
		);
};


const styles = {
	textStyle: {
		alignSelf: 'center',
		color : '#f00',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#f00',
		marginLeft: 5,
		marginRight: 5
	}
};

export default RedButton;