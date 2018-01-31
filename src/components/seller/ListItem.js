import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from '../common';

class ListItem extends Component {
onRowPress(){

}

	render (){
		const {name, image, status} = this.props.animal;

		return (
			<TouchableWithoutFeedback
				onPress={this.onRowPress.bind(this)}
			>
				<Card>
					<CardSection>
						<View style = {styles.headerContentStyle}>
							<Text style = {styles.headerTextStyle}>
								{name}
							</Text>
						</View>
					</CardSection>
					<CardSection>
						<Image
							style = {styles.imageStyle}
							source = {{ uri: image }}
						/>
					</CardSection>

					<CardSection>
						<Button onPress = {()=> Actions.animalEdit({ animal: this.props.animal })}>
							Details
						</Button>

						<Button>
							Applicants
						</Button>

					</CardSection>
				</Card>
				</TouchableWithoutFeedback>
			);
	}
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle:{
		fontSize: 18	
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default ListItem;