import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged, 
  passwordChanged, 
  signUpUser,
  firstnameChanged
   } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignUpForm extends Component {
	
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange ( text ){
		this.props.passwordChanged(text);
	}
	onButtonPress (){
		const {email, password} = this.props;
		this.props.signUpUser({ email, password});
	}

	onFirstNameChange ( text ){
		this.props.firstnameChanged(text);
	}


	renderError(){
		if (this.props.error) {
			return (
				<View style ={{ backgroundColor: 'white'}}>
					<Text style={ styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}
	renderButton(){
		if (this.props.loading){
			return <Spinner size = "large" />
		}
		return (
			<Button onPress = {this.onButtonPress.bind(this)}>
				Sign Up
			</Button>
		);
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input 
						label = "Email"
						placeholder = "email@gmail.com"
						onChangeText = {this.onEmailChange.bind(this)}
						value = {this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						secureTextEntry
						label= "Password"
						placeholder = "password"
						onChangeText = {this.onPasswordChange.bind(this)}
						value = {this.props.password}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label = "First Name"
						placeholder = "Jon"
						onChangeText = {this.onFirstNameChange.bind(this)}
						value = {this.props.firstname}
					/>
				</CardSection>

				{this.renderError()}
				<CardSection>
				{this.renderButton()}
				</CardSection>				
			</Card>
		);
	}
}

const styles = {
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red'
		}
};

const mapStateToProps = ({auth}) => {
	const { email, password, error,  loading } = auth;

	return { email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, signUpUser, firstnameChanged
})(SignUpForm);