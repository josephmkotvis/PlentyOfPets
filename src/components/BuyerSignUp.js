import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View, ScrollView } from 'react-native';
import { userUpdate, signUpUser, signUpBuyerInfo } from '../actions';
import { Card, CardSection, Button, Input } from './common';
import BasicAccountInfoForm from './BasicAccountInfoForm';

class BuyerSignUp extends Component {



	onButtonPress (){
	const {firstname,  lastname, address,  city,  userState,  zipcode,  role, currentAnimals, familySize, animalHistory} = this.props;
	this.props.signUpBuyerInfo({ firstname,  lastname, address,  city,  userState,  zipcode,  role, currentAnimals, familySize, animalHistory});
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
				<ScrollView>
					<BasicAccountInfoForm {...this.props} />
				<CardSection>
					<Input
						label ="Current Animals:"
						placeholder= "1 dog, 2 cats, 2 rats"
						value = {this.props.currentAnimals}
						onChangeText = {value => this.props.userUpdate({ prop: 'currentAnimals', value})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label = "Family Size: "
						placeholder = "Married with 3 kids"
						value = {this.props.familySize}
						onChangeText = {value => this.props.userUpdate({ prop: 'familySize', value})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label = "Animal History: "
						placeholder = "Owned 3 dogs"
						value = { this.props.animalHistory}
						onChangeText = {value => this.props.userUpdate({ prop: 'animalHistory', value})}
					/>
				</CardSection>
				</ScrollView>
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
			firstname, 
			lastname,
			address, 
			city, 
			userState, 
			zipcode,
			role,
			currentAnimals,
			familySize,
			animalHistory
		} = auth
	return {
			firstname, 
			lastname,
			address, 
			city, 
			userState, 
			zipcode,
			role,
			currentAnimals,
			familySize,
			animalHistory
		}
	};

export default connect( mapStateToProps, { userUpdate, signUpUser, signUpBuyerInfo })(BuyerSignUp)