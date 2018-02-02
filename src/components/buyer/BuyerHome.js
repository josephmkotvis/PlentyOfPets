import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import{ CardSection, Button } from '../common';
import AnimalDetail from './AnimalDetail';
import ListItem from './ListItem';
import { preferencesFetch, updatePreferences, buyerAnimalsFetch, zipCodeFetch  } from '../../actions';

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
		<ScrollView>
			<AnimalDetail key = {this.props.animals[this.state.activeCard].uid} animal={this.props.animals[this.state.activeCard]} />
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
			<CardSection>
			<View style = {styles.detailsContainerStyle} >
				<Text style = {styles.detailsScrollTextStyle} >
					Scroll Down For Details
				</Text>	
			</View>
			</CardSection>
			<CardSection>
				<Text>
					Type: {this.props.animals[this.state.activeCard].information.type}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					 Breed: {this.props.animals[this.state.activeCard].information.breed}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Age: {this.props.animals[this.state.activeCard].information.age}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Life Expectancy : {this.props.animals[this.state.activeCard].information.lifeExpectency}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Training : {this.props.animals[this.state.activeCard].information.training}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Coat Length: {this.props.animals[this.state.activeCard].information.coatLength}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Health: {this.props.animals[this.state.activeCard].information.health}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Neutered Status : {this.props.animals[this.state.activeCard].information.neuteredState}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Microchipped Status : {this.props.animals[this.state.activeCard].information.microChippedState}
				</Text>
			</CardSection>
			<CardSection>
				<Text>
					Living Cost : {this.props.animals[this.state.activeCard].information.livingCost}
				</Text>
			</CardSection>
		</ScrollView>
		);
	}
}


const styles = {
	detailsScrollTextStyle: {
		alignSelf: 'center',
		color : '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	detailsContainerStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5
	},
	detailsTextStyle: {
		alignSelf: 'center',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

const mapStateToProps = (state) => {
	const {  
	animals
	} = state.buyer
	return { 
	animals
	};
}
export default connect(mapStateToProps, { buyerAnimalsFetch, updatePreferences, preferencesFetch, zipCodeFetch })(BuyerHome);