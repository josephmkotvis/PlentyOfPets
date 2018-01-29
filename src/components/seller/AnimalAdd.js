import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import AnimalForm from './AnimalForm';


class AnimalAdd extends Component {
  onButtonPress() {

    //set up animal addition here w/ action
  }

  render() {
    return (
      <Card>
        <AnimalForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Animal
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.animalForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {})(AnimalAdd)