import _ from 'lodash';
import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View, ScrollView } from 'react-native';
import { userUpdate, signUpSellerInfo,accountInfoFetch } from '../actions';
import { Card, CardSection, Button, Input } from './common';
import BasicAccountInfoForm from './BasicAccountInfoForm';

class SellerAccountEdit extends Component {
	
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
		const {firstname, lastname, address, city, userState, zipcode} = this.props;
		this.props.updateSellerInfo({firstname, lastname,address, city, userState, zipcode});
	}


render (){
	return(
		<View style = {{flex: 1}} >
			<Card>
				<BasicAccountInfoForm />
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
	 zipcode
	} = auth;

	return {
	 firstname, 
	 lastname, 
	 address, 
	 city, 
	 userState, 
	 zipcode
	};
};

export default connect( mapStateToProps, { userUpdate, signUpSellerInfo, accountInfoFetch })(SellerAccountEdit)