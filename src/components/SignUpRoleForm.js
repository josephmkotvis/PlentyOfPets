import React, { Component } from 'react';
import { Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { roleUpdate } from '../actions';
import { Card, CardSection, Input, Button, Spinner, Confirm } from './common';
import { Actions } from 'react-native-router-flux';

class SignUpRoleForm extends Component  {
	state = {showBuyerModal: false, showSellerModal: false};

onButtonBuyerPress(){
	this.props.roleUpdate('Buyer');
	this.setState({ showBuyerModal: true });
}
onButtonSellerPress(){
	this.props.roleUpdate('Seller');
		this.setState({ showSellerModal: true });
}
onAccept(){
	this.setState({ showBuyerModal: false, showSellerModal: false });
	Actions.accountInfoForm();
}
onDecline(){
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
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Do you want to adopt out/sell animals?
				</Confirm>
				<Confirm
					visible={this.state.showBuyerModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
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

export default connect(mapStateToProps, { roleUpdate })(SignUpRoleForm);