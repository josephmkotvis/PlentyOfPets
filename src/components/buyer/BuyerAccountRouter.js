import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import{ CardSection, Button } from '../common'
import {} from '../../actions';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';

class BuyerAccountRouter extends Component {
	
	render(){
		return(
			<View>
				<CardSection>
				<Button
					onPress = {() => Actions.buyerAccountEdit()}
				>
					Account Information
				</Button>
				</CardSection>

	 				<CardSection>
				<Button
					onPress = {() => Actions.buyerPreferences()}
				>
					Preferences
				</Button>
				</CardSection>

				<CardSection>
				<Button
					onPress = {() => Actions.BuyerAccountRouter()}
				>
					Messages
				</Button>
				</CardSection>
				<CardSection>
				<Button
					onPress = {() => Actions.buyerHome()}
				>
					Home
				</Button>
				</CardSection>

			</View>


			)
	}

}

export default BuyerAccountRouter;