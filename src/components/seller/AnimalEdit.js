import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import AnimalForm from './AnimalForm';
import { animalUpdate, animalSave, animalDelete } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';


class AnimalEdit extends Component {
	state = {showModal: false };	

	componentWillMount(){
		_.each(this.props.animal, (value, prop) => {
			this.props.animalUpdate ( { prop, value });
		});
	}
	
onButtonPress(){
	const {
		name,
		type,
		breed,
		age,
		lifeExpectency,
		sex,
		weight,
		size,
		training,
		coatLength,
		health,
		neuteredState,
		microChippedStatus,
		status, 
		livingCost,
		price, 
		image
	} = this.props;

	this.props.animalSave({ 
		name, 
		type,
		breed,
		age,
		lifeExpectency,
		sex,
		weight,
		size,
		training,
		coatLength,
		health,
		neuteredState,
		microChippedStatus,
		status, 
		livingCost, 
		price, 
		image,  
		uid: this.props.animal.uid
	});
}

onAccept(){
	const { uid } = this.props.animal;
	this.setState({ showModal: false});
	this.props.animalDelete({ uid });
}
onDecline(){
	this.setState({ showModal: false });
}
	render () {
		return (
			<View style = {{flex: 1}}>
				<AnimalForm />
				<CardSection>
						<Button
							onPress = {this.onButtonPress.bind(this)}
						>	
							Save Changes
						</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({showModal: !this.state.showModal})}>
					Remove Animal
					</Button>
				</CardSection>
				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to remove this animal?
				</Confirm>
			</View>

		);
	}
}

const mapStateToProps = (state) => {
	const {
		name, 
		type,
		breed,
		age,
		lifeExpectency,
		sex,
		weight,
		size,
		training,
		coatLength,
		health,
		neuteredState,
		microChippedStatus,
		status, 
		livingCost, 
		price, 
		image 
	} = state.animalForm;

	return {
		name, 
		type,
		breed,
		age,
		lifeExpectency,
		sex,
		weight,
		size,
		training,
		coatLength,
		health,
		neuteredState,
		microChippedStatus,
		status, 
		livingCost, 
		price, 
		image
	};
};


export default connect(mapStateToProps, {animalUpdate, animalSave, animalDelete})(AnimalEdit);