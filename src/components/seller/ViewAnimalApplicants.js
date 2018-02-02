import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import AnimalForm from './AnimalForm';
import ApplicantDetails from './ApplicantDetails'
import { animalUpdate, animalSave, animalDelete } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';

class ViewAnimalApplicants extends Component {
componentWillMount(){

	this.createDataSource(this.props)
}
componentWillReceiveProps( nextProps) {
	this.createDataSource(nextProps);
}
createDataSource({applicants}){
	const ds = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2
	});
	this.dataSource = ds.cloneWithRows(applicants);
}

renderRow(applicant){
	return <ApplicantDetails applicant = {applicant} />
}

	render() {
		return(

		<View>
			<ListView
				enableEmptySections
				dataSource = {this.dataSource}
				renderRow = {this.renderRow}
			/>
		</View>

			)
	}

}


const mapStateToProps = (state) => {
	const {
		name,
		type,
		applicants
	} = state.animalForm;

	return {
		name,
		type,
		applicants
	};
};

export default connect(mapStateToProps, { })(ViewAnimalApplicants);