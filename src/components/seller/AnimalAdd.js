import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { animalUpdate, animalAdd } from '../../actions';
import {CardSection, Button } from '../common';
import AnimalForm from './AnimalForm';

  
class AnimalAdd extends Component {
  onButtonPress() {
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
      livingCost,
      coatLength,
      health,
      neuteredState,
      microChippedStatus,
      status,
      image,
      price,
      city
    } = this.props;
    this.props.animalAdd({
      name: name || "Unknown",
      type: type || "Dog",
      breed: breed || "Unknown",
      age: age || "Unknown",
      weight: weight || "Unknown",
      livingCost: livingCost || "$",
      lifeExpectency: lifeExpectency || "Less than 1 Year",
      sex: sex || "Male",
      size: size || "Small",
      training: training || "No Training",
      coatLength: coatLength || "No Hair",
      health: health || "Good Shape",
      neuteredState: neuteredState || "Not Neutered",
      microChippedStatus: microChippedStatus || "Not Microchipped",
      status: status || "Available for Adoption",
      image: image || "https://firebasestorage.googleapis.com/v0/b/plentyofpets-9ac35.appspot.com/o/images%2FNoPetImage.jpg?alt=media&token=9f53f1c2-3b40-4951-a7b8-a1ae0d65567a",
      price: price || "N/A",
      city: city || "Milwaukee",
      compatability: "",
    });
  }

  render() {
    return (
      <View style = {{flex: 1}} >
        <AnimalForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Animal
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    image,
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
    city
  } = state.animalForm;
  return {
    image,
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
    city
  };
};

export default connect(mapStateToProps, {animalUpdate, animalAdd})(AnimalAdd)