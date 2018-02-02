import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import{ CardSection, Card, Button } from '../common';

const AnimalDetail = ({animal}) => {
const {
		name,
		image,
		compatability
} = animal.information;
const {
		thumbnailStyle, 
		headerContentStyle, 
		headerTextStyle,
		thumbnailContainerStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style = {headerContentStyle}>
					<Text style = {headerTextStyle} > 
						{name}
					</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style = {imageStyle}
					source = {{ uri: image}}
				/>
			</CardSection>

			<CardSection>
				<View style = {headerContentStyle}>
					<Text style = {headerTextStyle} > 
						{compatability} % Compatability
					</Text>
				</View>
			</CardSection>
		</Card>
	);
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle:{
		fontSize: 18	
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};
export default AnimalDetail;