import firebase from 'firebase';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import { PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS,  PREFERENCES_FETCH_SUCCESS} from './types';
import RNFetchBlob from 'react-native-fetch-blob';

export const preferencesUpdate = ({prop, value}) => {
	return (dispatch) => {
		dispatch({
			type: PREFERENCE_UPDATE,
			payload: {prop, value}
		});
	}
}

export const preferencesFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/preferences`)
	      .on('value', snapshot => { 
	      		 _.forEach( snapshot.val(), (val ) => {
				dispatch({ type: PREFERENCES_FETCH_SUCCESS, payload: {val} });
				});
		});
  	};
}
export const updatePreferences = ({type, breed, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health}) => {
	const {currentUser} = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/preferences/${currentUser.uid}`)
			.set({ type, breed, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health})
			.then(user => updatePreferencesSucces( dispatch, user))
		}
}

const updatePreferencesSucces = (dispatch, user) => {
	dispatch({
		type: PREFERENCE_UPDATE_SUCCESS,
		paylaod: user
	});
	Actions.buyerAccountRouter();
}
