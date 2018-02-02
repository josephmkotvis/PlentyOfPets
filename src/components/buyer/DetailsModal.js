import React from 'react';
import { Text, View, Modal } from 'react-native';
import{ CardSection, Button } from '../common';

const DetailsModal = ( { children, visible, onPress }) => {
	const { containerStyle, textStyle, cardSectionStyle} = styles;
	return (
			<Modal
				visible={visible}
				transparent
				animationType= "slide"
				onRequestClose={() => {}}
			>
				<View style={containerStyle}>
					<CardSection style = {cardSectionStyle}>
					<Text>
						{age}
					</Text>
					</CardSection>

					<CardSection>
						<Button onPress={onPress}> Return </Button>
					</CardSection>
				</View>
			</Modal>
		);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};


export {DetailsModal} ;
