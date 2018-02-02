import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import { CardSection, Button} from '../common';
import RedButton from '../common';

class ApplicantDetails extends Component {
	state ={showDetailsModal: false, showContactModal: false}

onDetailsPress(){
	this.setState( { showDetailsModal: true} )
}
renderDetailsModalButton(){
	this.setState( { showDetailsModal: false} )
}
renderContactModalButton(){
	this.setState( { showContactModal: false} )
}
onContactPress(){
	this.setState( {showContactModal: true} )
}
onCall(){
	this.setState({ showContactModal: false})
	Communications.phonecall(this.props.applicant.info.phoneNumber, true);
}
onText(){
	this.setState({ showContactModal: false})
	Communications.text(this.props.applicant.info.phoneNumber, `Hello, I saw you were interested in the ${this.props.type}, ${this.props.name}. Are you still interested?`)
}
onMessage(){

}


	render (){
		const {  firstname, lastname, phoneNumber, address, animalHistory, currentAnimals, city, familySize, userState, zipcode } = this.props.applicant.info
		const { textStyle, titleStyle, buttonStyle, containerStyle, modalTextStyle , cardSectionStyle} = styles
		return (
				<View>
					<CardSection>
						<Text style = {styles.titleStyle}>	
							Applicant: {firstname} {lastname}
						</Text>
					</CardSection>
					<CardSection>
						<Button onPress = {this.onDetailsPress.bind(this)}
						>
						Details
						</Button>

						<Button onPress = {this.onContactPress.bind(this)}
						>
						Contact
						</Button>
						<Button onPress = {this.onContactPress.bind(this)}
						>
						Send Location
						</Button>
					</CardSection>
					<Modal
						visible={this.state.showDetailsModal}
						transparent
						animationType= "slide"
						onRequestClose={() => {}}
					>
					<View style={containerStyle}>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	Address: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{address}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	City: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{city}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	State: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{userState}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	Zipcode: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{zipcode}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	Phone Number: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{phoneNumber}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	Family Size: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	{familySize}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	Current Animals: 
						 </Text>
						 <Text style = {modalTextStyle}>
						 	 {currentAnimals}
						 </Text>
					</CardSection>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>

						 	Past Animals: 
						 </Text>
						 <Text style = {modalTextStyle}>

						 	{animalHistory}
						 </Text>
					</CardSection>
					<CardSection>
						<Button onPress={this.renderDetailsModalButton.bind(this)}>Return</Button>
					</CardSection>
				</View>
			</Modal>
			<Modal
						visible={this.state.showContactModal}
						transparent
						animationType= "slide"
						onRequestClose={() => {}}
					>
					<View style={containerStyle}>
					<CardSection style = {cardSectionStyle}>
						<Text style = {modalTextStyle}>
						 	
						 </Text>
					</CardSection>

					<CardSection>
						<Button onPress={this.onCall.bind(this)}> Call </Button>
						<Button onPress={this.onText.bind(this)}> Text </Button>
						<Button onPress={this.onMessage.bind(this)}> Message </Button>
					</CardSection>
					<CardSection>
						<Button onPress={this.renderContactModalButton.bind(this)}>Return</Button>
					</CardSection>
				</View>
			</Modal>
				</View>
			);
	}
}

const styles = {
	titleStyle : {
		fontSize: 18,
		paddingLeft: 15
	},
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
	},
	cardSectionStyle: {
		justifyContent: 'center'
	},
	modalTextStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'left',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export default ApplicantDetails;