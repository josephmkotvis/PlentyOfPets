import _ from 'lodash';
import React, {Component } from 'react';
import {connect} from 'react-redux';
import { View, ScrollView, StyleSheet, Text, Picker } from 'react-native';
import { updatePreferences, preferencesUpdate , preferencesFetch } from '../../actions';
import { Card, CardSection, Button, Input } from '../common';

class BuyerPreferences extends Component {


	renderButton(){
		if (this.props.loading){
			return <Spinner size = "large" />
		}
		return (
			<Button onPress = {this.onButtonPress.bind(this)}>
				Update Preferences
			</Button>
		);
	}

	onButtonPress(){
		const { type, breed, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health, city} = this.state;

		this.props.updatePreferences({ 
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
			health : health || 'Irrelevant',
			city: city || 'Irrelevant' 
		});
	}


	render(){
		return(
			<View style = {{flex: 1}}>
				<ScrollView>
					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Type: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.type}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'type' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Dog" value ="Dog" />
							<Picker.Item label="Cat" value ="Cat" />
							<Picker.Item label="Small Animal" value ="Small Animal" />
							<Picker.Item label="Reptile" value ="Reptile" />
							<Picker.Item label="Bird" value ="Bird" />

						</Picker>
					</CardSection>

					<CardSection>
						<Input
							label= "Breed: "
							placeholder= "Irrelevant"
							value= {this.props.breed}
							onChangeText= {value => this.props.preferencesUpdate({ prop: 'breed', value })}
						/>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Life Expectancy: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.lifeExpectency}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'lifeExpectency' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Less than 1 Year" value ="Less than 1 Year" />
							<Picker.Item label="1-5 Years" value ="1-5 Years" />
							<Picker.Item label="5-10 Years" value ="5-10 Years" />
							<Picker.Item label="10-20 Years" value ="10-20 Years" />
							<Picker.Item label="20+ Years" value ="20+ Years" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Sex: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.sex}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'sex' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />						
							<Picker.Item label="Male" value ="Male" />
							<Picker.Item label="Female" value ="Female" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Size: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.size}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'size' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Small" value ="Small" />
							<Picker.Item label="Medium" value ="Medium" />
							<Picker.Item label="Large" value ="Large" />
							<Picker.Item label="Extra Large" value ="Extra Large" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Training: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.training}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'training' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="No Training" value ="No Training" />
							<Picker.Item label="Some Training" value ="Some Training" />
							<Picker.Item label="Fully Trained" value ="Fully Trained" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Coat Length: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.coatLength}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'coatLength' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="No Hair" value ="No Hair" />
							<Picker.Item label="Short Hair" value ="Short Hair" />
							<Picker.Item label="Long Hair" value ="Fully Trained" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Neutered Status: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.neuteredStatus}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'neuteredStatus' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Not Neutered" value ="Not Neutered" />
							<Picker.Item label="Neutered" value ="Neutere" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Microchipped Status: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.microChippedStatus}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'microChippedStatus' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Not Microchipped" value ="Not Microchipped" />
							<Picker.Item label="Microchipped" value ="Microchipped" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Living Costs: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.livingCost}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'livingCost' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="$" value ="$" />
							<Picker.Item label="$$" value ="$$" />
							<Picker.Item label="$$$" value ="$$$" />
						</Picker>
					</CardSection>

					<CardSection style = {styles.pickerCardSectionStyle}>
						<Text style={styles.pickerTextStyle}>Health: </Text>
						<Picker
							style = {styles.pickerStyle}
							selectedValue={this.props.health}
							onValueChange={value => this.props.preferencesUpdate ( { prop: 'health' , value})}
						>
							<Picker.Item label="Irrelevant" value ="Irrelevant" />
							<Picker.Item label="Good Shape" value ="Good Shape" />
							<Picker.Item label="Little Ruff" value ="Little Ruff" />
							<Picker.Item label="Needs Care" value ="Needs Care" />
						</Picker>
					</CardSection>
					<CardSection>
						<Input 
							label = "City: "
							placeholder= "Irrelevant"
							value= {this.props.city}
							onChangeText = { value => this.props.preferencesUpdate({ prop: 'city', value })}
						/>
					</CardSection>
				</ScrollView>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			
			</View>
		)
	}

}

const styles = StyleSheet.create({
  pickerCardSectionStyle: {
    height: 55,
    alignItems: 'center'
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    flex: 2,
    margin: -8
  },
  buttonStyle: {
		flex: 2 
	}
})

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
	health,
	city
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
	health,
	city
	};
}

export default connect( mapStateToProps , { updatePreferences, preferencesUpdate, preferencesFetch}) (BuyerPreferences);