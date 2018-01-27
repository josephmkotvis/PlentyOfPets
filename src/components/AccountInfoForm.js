import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged, 
  passwordChanged, 
  confirmPasswordChanged,
  updateUser,
  firstnameChanged,
  lastnameChanged,
  addressChanged,
  cityChanged,
  stateChanged,
  zipcodeChanged
   } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class AccountInfoForm extends Component {
	
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange ( text ){
		this.props.passwordChanged(text);
	}
	onConfirmPasswordChange ( text ) {
		this.props.confirmPasswordChanged(text);
	}
	onFirstNameChange ( text ){
		this.props.firstnameChanged(text);
	}

	onLastNameChange ( text ){
		this.props.lastnameChanged(text);
	}

	onAddressChange( text ){
		this.props.addressChanged(text);
	}
	onCityChange( text) {
		this.props.cityChanged(text);
	}
	onStateChange( text ){
		this.props.stateChanged (text);
	}
	onZipcodeChange( text ){
		this.props.zipcodeChanged (text);
	}
	onButtonPress (){
		const {
			email, 
			password, 
			comfirmPassword, 
			firstname, 
			lastname,
			address, 
			city, 
			state, 
			zipcode
		} = this.props;
		this.props.updateUser({
			email, 
			password, 
			comfirmPassword, 
			firstname, 
			lastname,
			address, 
			city, 
			state, 
			zipcode});
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
				Update Account Information
			</Button>
		);
	}


	render(){
		return(
			<View style={{flex:1}}>
				<ScrollView>
					<CardSection>
						<Input 
							label = "Email: "
							placeholder = "email@gmail.com"
							onChangeText = {this.onEmailChange.bind(this)}
							value = {this.props.email}
						/>
					</CardSection>

					<CardSection>
						<Input 
							secureTextEntry
							label= "Password: "
							placeholder = "password"
							onChangeText = {this.onPasswordChange.bind(this)}
							value = {this.props.password}
						/>
					</CardSection>

					<CardSection>
						<Input 
							secureTextEntry
							label= "Confirm Password: "
							placeholder = "password"
							onChangeText = {this.onConfirmPasswordChange.bind(this)}
							value = {this.props.comfirmPassword}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "First Name: "
							placeholder = "Jon"
							onChangeText = {this.onFirstNameChange.bind(this)}
							value = {this.props.firstname}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Last Name: "
							placeholder = "Smith"
							onChangeText = {this.onLastNameChange.bind(this)}
							value = {this.props.lastname}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Address: "
							placeholder = "2324 S 28th Street"
							onChangeText = {this.onAddressChange.bind(this)}
							value = {this.props.address}
						/>
					</CardSection>		

					<CardSection>
						<Input 
							label = "City: "
							placeholder = "Milwaukee"
							onChangeText = {this.onCityChange.bind(this)}
							value = {this.props.city}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "State:  "
							placeholder = "Wisconsin"
							onChangeText = {this.onStateChange.bind(this)}
							value = {this.props.state}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Zipcode: "
							placeholder = "53214"
							onChangeText = {this.onZipcodeChange.bind(this)}
							value = {this.props.zipcode}
						/>
					</CardSection>	 				
				</ScrollView>
			<View>
					{this.renderError()}
				<CardSection>
					{this.renderButton()}			
				</CardSection>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  errorTextStyle: {
	fontSize: 20,
	alignSelf: 'center',
	color: 'red'
	}
})

const mapStateToProps = ({auth}) => {
	const {
	 email,
	 password, 
	 comfirmPassword,
	 error,  
	 loading, 
	 firstname, 
	 lastname, 
	 address, 
	 city, 
	 userState, 
	 zipcode
	} = auth;

	return {
	 email, 
	 password, 
	 comfirmPassword,
	 error, 
	 loading, 
	 firstname, 
	 lastname, 
	 address, 
	 city, 
	 userState, 
	 zipcode};
};

export default connect(mapStateToProps, {
  emailChanged, 
  passwordChanged,
  confirmPasswordChanged,
  updateUser,
  firstnameChanged, 
  lastnameChanged, 
  addressChanged, 
  cityChanged, 
  stateChanged,
  zipcodeChanged
})(AccountInfoForm);