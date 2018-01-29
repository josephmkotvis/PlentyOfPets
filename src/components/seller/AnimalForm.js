import React, { Component } from 'react';
import { Text, ScrollView, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { animalUpdate } from '../../actions';
import { CardSection, Input } from '../common';

class AnimalForm extends Component {

	render(){
		return(
			<ScrollView>
				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Type: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.type}
						onValueChange={value => this.props.animalUpdate ( { prop: 'type' , value})}
					>
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
						placeholder= "PitBull"
						value= {this.props.breed}
						onChangeText= {value => this.props.animalUpdate({ prop: 'breed', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label= "Age: "
						placeholder= "3 years"
						value= {this.props.age}
						onChangeText= {value => this.props.animalUpdate({ prop: 'age', value})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label= "Weight: "
						placeholder= "13 pounds"
						value= {this.props.weight}
						onChangeText={value => this.props.animalUpdate({ prop: 'weight', value})}
					/>
				</CardSection>

				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Life Expectancy: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.lifeExpectency}
						onValueChange={value => this.props.animalUpdate ( { prop: 'lifeExpectency' , value})}
					>
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
						onValueChange={value => this.props.animalUpdate ( { prop: 'sex' , value})}
					>
						<Picker.Item label="Male" value ="Male" />
						<Picker.Item label="Female" value ="Female" />
						<Picker.Item label="Unknown" value ="Unknown" />
					</Picker>
				</CardSection>


				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Size: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.size}
						onValueChange={value => this.props.animalUpdate ( { prop: 'size' , value})}
					>
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
						onValueChange={value => this.props.animalUpdate ( { prop: 'training' , value})}
					>
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
						onValueChange={value => this.props.animalUpdate ( { prop: 'coatLength' , value})}
					>
						<Picker.Item label="No Hair" value ="No Hair" />
						<Picker.Item label="Short Hair" value ="Short Hair" />
						<Picker.Item label="Long Hair" value ="Fully Trained" />
					</Picker>
				</CardSection>

				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Health: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.health}
						onValueChange={value => this.props.animalUpdate ( { prop: 'health' , value})}
					>
						<Picker.Item label="Good Shape" value ="Good Shape" />
						<Picker.Item label="Little Ruff" value ="Little Ruff" />
						<Picker.Item label="Needs Care" value ="Needs Care" />
					</Picker>
				</CardSection>

				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Neutered Status: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.neuteredStatus}
						onValueChange={value => this.props.animalUpdate ( { prop: 'neuteredStatus' , value})}
					>
						<Picker.Item label="Not Neutered" value ="Not Neutered" />
						<Picker.Item label="Neutered" value ="Neutere" />
						<Picker.Item label="Non-Applicable" value ="Non-Applicable" />
					</Picker>
				</CardSection>

				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Microchipped Status: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.microChippedStatus}
						onValueChange={value => this.props.animalUpdate ( { prop: 'microChippedStatus' , value})}
					>
						<Picker.Item label="Not Microchipped" value ="Not Microchipped" />
						<Picker.Item label="Microchipped" value ="Microchipped" />
						<Picker.Item label="Non-Applicable" value ="Non-Applicable" />
					</Picker>
				</CardSection>

				<CardSection style = {styles.pickerCardSectionStyle}>
					<Text style={styles.pickerTextStyle}>Status: </Text>
					<Picker
						style = {styles.pickerStyle}
						selectedValue={this.props.status}
						onValueChange={value => this.props.animalUpdate ( { prop: 'status' , value})}
					>
						<Picker.Item label="Available for Adoption" value ="Available for Adoption" />
						<Picker.Item label="Available for Purchase" value ="Available for Purchase" />
						<Picker.Item label="Adoption in Process" value ="Adoption in Process" />
						<Picker.Item label="Purchase in Process" value ="Purchase in Process" />
						<Picker.Item label="Adopted" value = "Adopter" />
						<Picker.Item label="Sold" value= "Sold" />
					</Picker>
				</CardSection>

			</ScrollView>
		);
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
  }
})

const mapStateToProps = (state) => {
	const {
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
		status
	} = state.animalForm;
	return {
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
		status
	};
};

export default connect(mapStateToProps, {animalUpdate} )(AnimalForm);