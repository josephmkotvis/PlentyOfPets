import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { buyerAnimalsFetch} from '../../actions';

class BuyerAnimalListFetcher extends Component{

	componentWillMount(){

	 	const { type, breed, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health} = this.props;
		
		this.props.buyerAnimalsFetch({ 
			type  : type || 'Irrelevant',
			breed : breed ||'Irrelevant',
			lifeExpectency  : lifeExpectency ||'Irrelevant',
			sex  : sex || 'Irrelevant',
			size  : size ||'Irrelevant',
			training   : training ||'Irrelevant',
			coatLength : coatLength ||'Irrelevant',
			neuteredStatus : neuteredStatus || 'Irrelevant',
			microChippedStatus : microChippedStatus ||'Irrelevant',
			livingCost : livingCost || 'Irrelevant',
			health : health || 'Irrelevant' 
			})
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
export default connect(mapStateToProps, {  buyerAnimalsFetch})(BuyerAnimalListFetcher);