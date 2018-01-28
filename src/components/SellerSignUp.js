import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';
import { userUpdate, signUpSellerInfo } from '../actions';
import { Card, CardSection, Button } from './common';
import BasicAccountInfoForm from './BasicAccountInfoForm';

class SellerSignUp extends Component {



	onButtonPress (){
		const {firstname, lastname,address, city, userState, zipcode, role} = this.props;
		this.props.signUpSellerInfo({firstname, lastname,address, city, userState, zipcode, role});
	}

	renderButton(){
		if (this.props.loading){
			return <Spinner size = "large" />
		}
		return (
			<Button onPress = {this.onButtonPress.bind(this)}>
				Finish Sign Up
			</Button>
		);
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

render (){
	return(
		<View style = {{flex: 1}}>
			<Card>
				<BasicAccountInfoForm {...this.props} />
				<View>
						{this.renderError()}

				</View>
				<CardSection>
					{this.renderButton()}			
				</CardSection>
			</Card>
		</View>
		);
	}
}

const styles = ({
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
			confirmPassword, 
			firstname, 
			lastname,
			address, 
			city, 
			userState, 
			zipcode,
			role
		} = auth
	return {
			email, 
			password, 
			confirmPassword, 
			firstname, 
			lastname,
			address, 
			city, 
			userState, 
			zipcode,
			role
		}
	};

export default connect( mapStateToProps, { userUpdate, signUpSellerInfo })(SellerSignUp)