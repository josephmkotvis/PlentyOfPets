import _ from 'lodash';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';
import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardSection, Button,Confirm, Input } from '../common';
import { animalUpdate} from '../../actions';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import CameraRollPicker from 'react-native-camera-roll-picker';

class AnimalImagePicker extends Component {
  state = {showModal: false}

   getSelectedImages(image){
      if(image[0]){
        this.props.animalUpdate({prop: 'image', value: image[0].uri});
        this.setState({ showModal: true});
      }
  }
  onAccept(){
    this.uploadImage(this.props.image, this.props.imageName);
    this.setState({ showModal: false });
    Actions.pop( { type: 'reset'});
  }

    uploadImage = (uri, imageName, mime = 'image/jpg') => {
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
      return new Promise((resolve, reject) => {
          let uploadBlob = null
          const imageRef = firebase.storage().ref('images').child(imageName)
          fs.readFile(uri, 'base64')  
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          })
          .then(() => {
            uploadBlob.close()
            return imageRef.getDownloadURL()
          })
          .then((url) => {
            resolve(url)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

  render() {
    return (
      <View style= {{flex:1}}>
        <CameraRollPicker  maximum={1} callback={this.getSelectedImages.bind(this)} />
        <CardSection>
        <Input 
          label=" Photo Name: "
          placeholder= "Best Pet Photo"
          value = {this.props.imageName}
          onChangeText = {value => this.props.animalUpdate({ prop: 'imageName', value})}
        />
          <Confirm
            visible={this.state.showModal}
            onAccept={()=> this.onAccept()}
            onDecline={()=> this.setState({ showModal: false})}
          >
          Do you want to choose this photo?
          </Confirm>
        </CardSection>


    </View>
    );
  }
}
 


const mapStateToProps = (state) => {
  const {image, imageName, imageURL} = state.animalForm;
  return {image, imageName,imageURL };
};

export default connect(mapStateToProps, { animalUpdate})(AnimalImagePicker)