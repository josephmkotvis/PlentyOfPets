import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View, Picker,StyleSheet, Text } from 'react-native';
import { userUpdate, signUpSellerInfo } from '../actions';
import { Card, CardSection, Button } from './common';
import BasicAccountInfoForm from './BasicAccountInfoForm';

class SellerSignUp extends Component {



	onButtonPress (){
		const {firstname, lastname,address, city, userState, zipcode, role, sellType} = this.props;
		this.props.signUpSellerInfo({firstname, lastname,address, city, userState, zipcode, role, sellType: sellType || "Adoption Service", rating: 0});
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
				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}> Association : </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.sellType}
						onValueChange={value => this.props.userUpdate( { prop: 'sellType' , value})}
					>
						<Picker.Item label="Adoption Service" value ="Adoption Service" />
						<Picker.Item label="Purebred Seller" value ="Purebred Seller" />
						<Picker.Item label="Casual Seller" value ="Casual Seller" />
					</Picker>
				</CardSection>
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

const styles = StyleSheet.create({
  errorTextStyle: {
	fontSize: 20,
	alignSelf: 'center',
	color: 'red'
	},
	  pickerCardSectionStyle: {
    height: 55,
    alignItems: 'center'
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    flex: 2,
    margin: -8
  },
  buttonStyle: {
		flex: 2 
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
			role,
			sellType
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
			role,
			sellType
		}
	};

export default connect( mapStateToProps, { userUpdate, signUpSellerInfo })(SellerSignUp)