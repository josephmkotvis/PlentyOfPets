import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import ListItem from './ListItem';


class SellerAnimalList extends Component {

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