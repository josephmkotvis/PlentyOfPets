import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { preferencesFirstFetch} from '../../actions';

class BuyerRouteToHome extends Component{

	componentWillMount(){
	 	this.props.preferencesFirstFetch();
	}


	render(){

		return(
			<View>
			</View>
			)
	}
}


const mapStateToProps = (state) => {
	const {  
	type, 
	breed, 
	lifeExpectency, 
	sex, 
	size, 
	training,  
	coatLength, 
	neuteredStatus,
	microChippedStatus, 
	livingCost, 
	health
	} = state.buyer
	return { 
	type, 
	breed, 
	lifeExpectency, 
	sex, 
	size, 
	training,  
	coatLength, 
	neuteredStatus,
	microChippedStatus, 
	livingCost, 
	health
	};
}
export default connect(mapStateToProps, {  preferencesFirstFetch})(BuyerRouteToHome);