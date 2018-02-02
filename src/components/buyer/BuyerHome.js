import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import{ CardSection, Button } from '../common';
import AnimalDetail from './AnimalDetail';
import ListItem from './ListItem';
import { preferencesFetch, buyerAnimalsFetch, zipCodeFetch  } from '../../actions';

class BuyerHome extends Component {
		state = { activeCard: 0};

onAccept(){
	this.props.favoriteAnimal();
	var newCard = this.activeCard + 1;
	this.setState({ activeCard: newCard}) 
}

onDecline(){
	this.setState({ activeCard: (this.activeCard ++)})
}
showDetails(){
	
}

render(){
	return(
		<View>
			<AnimalDetail key = {this.props.animals[this.state.activeCard].uid} animal={this.props.animals[this.state.activeCard]} />
			<CardSection>
				<Button
					onPress= {this.showDetails()}
				>
					Details
				</Button>
			</CardSection>
			<CardSection>
				<Button
					onPress= {this.showDetails()}
				>
					Uninterested
				</Button>
				<Button
					onPress= {this.showDetails()}
				>
					Interested
				</Button>
			</CardSection>

		</View>
		);
	}
}

const mapStateToProps = (state) => {
	const {  
	animals
	} = state.buyer
	return { 
	animals
	};
}
export default connect(mapStateToProps, { buyerAnimalsFetch, preferencesFetch, zipCodeFetch })(BuyerHome);