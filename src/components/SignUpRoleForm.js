import React, { Component } from 'react';
import { Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';
import { Card, CardSection, Input, Button, Spinner, Confirm } from './common';
import { Actions } from 'react-native-router-flux';

class SignUpRoleForm extends Component  {
	state = {showBuyerModal: false, showSellerModal: false};

onButtonBuyerPress(){
	this.setState({ showBuyerModal: true });
}
onButtonSellerPress(){
	this.setState({ showSellerModal: true });
}
onBuyerAccept(){
	this.props.userUpdate({ prop: 'role', value: 'Buyer'});
	this.setState({ showBuyerModal: false, showSellerModal: false });
}
onBuyerDecline(){
	this.setState({ showBuyerModal: false, showSellerModal: false });
}
onSellerAccept(){
	this.props.userUpdate({ prop: 'role', value: 'Seller' });
	this.setState({ showBuyerModal: false, showSellerModal: false });
}
onSellerDecline(){
	this.setState({ showBuyerModal: false, showSellerModal: false });
}

	render(){
		return(	
			<Card>
				<CardSection>
					<Text> What are you looking to do? </Text>
				</CardSection>
				<CardSection>
					<Button 
						onPress = {this.onButtonBuyerPress.bind(this)}
						style = {styles.buttonStyle}
					>
						Adopt / Buy
					</Button>
					<Button
					 	onPress = {this.onButtonSellerPress.bind(this)}
					 	style = {styles.buttonStyle}
					 >
						Adopt Out / Sell
					</Button>
				</CardSection>
				<Confirm
					visible={this.state.showSellerModal}
					onAccept={this.onSellerAccept.bind(this)}
					onDecline={this.onSellerDecline.bind(this)}
				>
					Do you want to adopt out/sell animals?
				</Confirm>
				<Confirm
					visible={this.state.showBuyerModal}
					onAccept={this.onBuyerAccept.bind(this)}
					onDecline={this.onSellerDecline.bind(this)}
				>
					Do you want to adopt/buy animals?
				</Confirm>
			</Card>
		)
	};

}
const styles = {
	buttonStyle: {
		flex: 1 
	}
}

const mapStateToProps = ({auth}) => {
	const {role} = auth;
	return {role};
};

export default connect(mapStateToProps, { userUpdate })(SignUpRoleForm);