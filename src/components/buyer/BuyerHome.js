import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import{ CardSection } from '../common'
import {} from '../../actions';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';

class BuyerHome extends Component {
render(){
	return(
		<View>
		<Text> THE CUTEST DOG WILL BE HERE FOR YOu </Text>
		</View>

		);

	}

}

const mapStateToProps = state => {
	const {} = this.props;
	return {};
}

export default connect(null, {})(BuyerHome);