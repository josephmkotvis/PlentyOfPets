import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class SellerHomePage extends Component {

	render(){
		return(

		);
	}
}

	const mapStateToProps = ({state}) => {
		const {} = state.SellerHomePage

	};

export default connect(mapStateToProps, {})(SellerHomePage);