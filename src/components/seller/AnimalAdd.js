import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { animalUpdate, animalAdd } from '../../actions';
import {CardSection, Button } from '../common';
import AnimalForm from './AnimalForm';


class AnimalAdd extends Component {
  onButtonPress() {
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
    } = this.props;
    this.props.animalAdd({
      type: type || "Dog",
      breed,
      age,
      weight,
      lifeExpectency: lifeExpectency || "Less than 1 Year",
      sex: sex || "Male",
      size: size || "Small",
      training: training || "No Training",
      coatLength: coatLength || "No Hair",
      health: health || "Good Shape",
      neuteredState: neuteredState || "Not Neutered",
      microChippedStatus: microChippedStatus || "Not Microchipped",
      status: status || "Available for Adoption"
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

export default connect(mapStateToProps, {animalUpdate, animalAdd})(AnimalAdd)