import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { checkRole } from '../actions';

class RoleRouter extends Component{

	componentWillMount(){
		this.props.checkRole();
	}


	render(){

		return(
			<View>
			</View>
			)
	}
}


export default connect(null, {  checkRole })(RoleRouter);