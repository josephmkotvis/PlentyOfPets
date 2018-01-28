import React, { Component } from 'react';
import { Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { CardSection, Input } from './common';

class AnimalForm extends Component {

	render(){
		return(
			<ScrollView>

			</ScrollView>
		);
	}

}

const mapStateToProps = (state) => {
// == state.animalForm
};

export default connect(mapStateToProps, {} )(AnimalForm);