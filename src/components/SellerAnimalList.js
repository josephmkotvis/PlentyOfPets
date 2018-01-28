import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class SellerAnimalList extends Component {
	componentWillMount(){

	}

	componentWillReceiveProps(){

	}
	createDataSource({}){


	}

	renderRow(){

	}

	render(){
		return(
			<Text> Hello! This is where your animal lsit will be </Text>
//			<ListView
//				enableEmptySections
//				dataSource = {this.dataSource}
//				renderRow = {this.renderRow}
//			/>
		);
	}
}

	// const mapStateToProps = state => {
	// };

export default connect(null, {})(SellerAnimalList);