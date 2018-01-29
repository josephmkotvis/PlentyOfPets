import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { userUpdate } from '../actions';
import {CardSection, Input } from './common';

class AccountInfoForm extends Component {
	render(){
		return(
				<ScrollView>
					<CardSection>
						<Input 
							label = "First Name: "
							placeholder = "Jon"
							value = {this.props.firstname}
							onChangeText = {value => this.props.userUpdate({ prop: 'firstname', value})}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Last Name: "
							placeholder = "Smith"
							value = {this.props.lastname}
							onChangeText = {value => this.props.userUpdate({ prop: 'lastname', value }) }
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Address: "
							placeholder = "2324 S 28th Street"
							value = {this.props.address}
							onChangeText = {value => this.props.userUpdate({ prop: 'address', value })}
						/>
					</CardSection>		

					<CardSection>
						<Input 
							label = "City: "
							placeholder = "Milwaukee"
							value = {this.props.city}
							onChangeText = {value => this.props.userUpdate({ prop: 'city', value })}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "State:  "
							placeholder = "WI"
							value = {this.props.userState}
							onChangeText = {value => this.props.userUpdate({ prop: 'userState', value})}
						/>
					</CardSection>

					<CardSection>
						<Input 
							label = "Zipcode: "
							placeholder = "53214"
							value = {this.props.zipcode}
							onChangeText = {value => this.props.userUpdate({ prop: 'zipcode', value })}
						/>
					</CardSection>	 				
				</ScrollView>

		);
	}
}



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
	 zipcode
	} = auth;

	return {
	 email, 
	 password, 
	 confirmPassword,
	 firstname, 
	 lastname, 
	 address, 
	 city, 
	 userState, 
	 zipcode
	};
};

export default connect(mapStateToProps, { userUpdate })(AccountInfoForm);