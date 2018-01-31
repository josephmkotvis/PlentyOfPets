import _ from 'lodash';
import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View, ScrollView } from 'react-native';
import { userUpdate, updateBuyerInfo,accountInfoFetch } from '../actions';
import { Card, CardSection, Button, Input } from './common';
import BasicAccountInfoForm from './BasicAccountInfoForm';

class BuyerAccountEdit extends Component {
	componentWillMount(){
		this.props.accountInfoFetch();
	}
	

renderButton(){
		if (this.props.loading){
			return <Spinner size = "large" />
		}
		return (
			<Button onPress = {this.onButtonPress.bind(this)}>
				Finish Editing
			</Button>
		);
	}

	onButtonPress (){
		const { 		
		firstname, 
 		lastname, 
 		address, 
 		city, 
 		userState, 
 		zipcode,
 		currentAnimals, 
 		familySize, 
 		animalHistory
 	} = this.props;

		this.props.updateBuyerInfo({ 		
		firstname, 
 		lastname, 
 		address, 
 		city, 
 		userState, 
 		zipcode,
 		currentAnimals, 
 		familySize, 
 		animalHistory});
	}

	render(){
		return(
			<View style = {{flex : 1}} >
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
					<CardSection>
						{this.renderButton()}
					</CardSection>
			</View>
		);
	}
}
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
	} = auth;

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

	};
};

export default connect( mapStateToProps, { userUpdate,updateBuyerInfo,accountInfoFetch })(BuyerAccountEdit)