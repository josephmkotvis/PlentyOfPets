import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { userUpdate, loginUser, signupUser, beginSignUp } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
	onButtonPress (){
		const {email, password} = this.props;
		this.props.loginUser({ email, password});
	}
	onSignUpButtonPress (){
		this.props.beginSignUp();
		Actions.signUpEmailPW();
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
				Login
			</Button>
		);
	}
	renderSignUpButton(){
		if (this.props.loading){
			return <Spinner size = "large" />
		}
		return (
			<Button onPress = {this.onSignUpButtonPress.bind(this)}>
				Sign Up
			</Button>
		);
	}

	render (){
		return(
			<Card>
				<CardSection>
						<Input 
							label = "Email: "
							placeholder = "email@gmail.com"			
							value = {this.props.email}
							onChangeText = {value => this.props.userUpdate({ prop: 'email', value})}
						/>
					</CardSection>

					<CardSection>
						<Input 
							secureTextEntry
							label= "Password: "
							placeholder = "password"
							value = {this.props.password}
							onChangeText = {value => this.props.userUpdate({ prop: 'password', value})}
						/>
					</CardSection>

				{this.renderError()}
				<CardSection>
				{this.renderButton()}
				</CardSection>
				<CardSection>
				{this.renderSignUpButton()}
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
		const { email, password, error, loading } = auth;

		return { email, password, error, loading};
	};

	export default connect(mapStateToProps, {
	  userUpdate, loginUser, beginSignUp
	})(LoginForm);