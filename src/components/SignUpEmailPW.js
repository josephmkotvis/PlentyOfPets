import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { userUpdate, signUpUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class SignUpEmailPW extends Component {

	onButtonPress (){
		const {email, password, confirmPassword} = this.props;
		this.props.signUpUser({email, password, confirmPassword})
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
				Continue
			</Button>
		);
	}

render(){
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

					<CardSection>
						<Input 
							secureTextEntry
							label= "Confirm Password: "
							placeholder = "password"
							value = {this.props.confirmPassword}
							onChangeText = {value => this.props.userUpdate({ prop: 'confirmPassword', value })}
						/>
					</CardSection>
					{this.renderError()}
					<CardSection>
					{this.renderButton()}
					</CardSection>
				</Card>
		)
	};
};


	const styles = {
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red'
		}
	};


const mapStateToProps = ({auth}) => {
	const { email, password, confirmPassword, error, loading } = auth
	return { email, password, confirmPassword, error, loading};
};

export default connect(mapStateToProps, {userUpdate, signUpUser})(SignUpEmailPW);


