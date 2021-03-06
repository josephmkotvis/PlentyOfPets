import firebase from 'firebase';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import { PREFERENCE_UPDATE,INTERESTED_BUYER_UPLOADED, PREFERENCE_UPDATE_SUCCESS, PREFERENCES_FETCH_SUCCESS, PREF_ANIMALS_FETCH_SUCCESS, ANIMALS_FETCH_SUCCESS, PREFERENCES_FIRST_FETCH_SUCCESS} from './types';
import RNFetchBlob from 'react-native-fetch-blob';

export const preferencesUpdate = ({prop, value}) => {
	return (dispatch) => {
		dispatch({
			type: PREFERENCE_UPDATE,
			payload: {prop, value}
		});
	}
}
export const addInterestedBuyer = ({identification, compatability}) => {
	const {currentUser} = firebase.auth();
	return(dispatch)  =>{
		firebase.database().ref(`/users/${currentUser.uid}/information`)
				.on ('value', snapshot =>{
					_.forEach( snapshot.val(), (info) => {	
						firebase.database().ref(`animals/${identification}/interestedBuyers/${currentUser.uid}`)
							.set({info})
					})
				})
	}
}
export const buyerAnimalsFetch = ({type, personality, breed, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health, city}) => {
	return(dispatch) => {
		firebase.database().ref(`/animals`)
			.on('value', snapshot => {
				const animals = _.map (snapshot.val(), (val, uid) => {
					return { ...val, uid}
				})
				let animalarray = [];
				_.forEach( animals , (value) => {
					if(value.information.city == city){
						if (type == "Irrelevant" || value.information.type == type) {
							var compatability = 50;
							var breedCompatability = 50;
							var lifeExpectencyCompatability = 10;
							var sexCompatability = 20;
							var sizeCompatability = 15;
							var trainingCompatability = 20;
							var coatLengthCompatability = 20;
							var microChippedStatusCompatability = 15;
							var neuteredStatusCompatability = 25;
							var healthCompatability = 20;
							var livingCostCompatability = 20;
							var compatabilityMax = (50 + breedCompatability + lifeExpectencyCompatability + sexCompatability + sizeCompatability + trainingCompatability + coatLengthCompatability + microChippedStatusCompatability + neuteredStatusCompatability + healthCompatability +livingCostCompatability);
							

							if(value.information.breed == breed)
							{
								compatability += breedCompatability;
							}
							if (breed == "Irrelevant"){
								compatabilityMax -= breedCompatability;
							}
							if (value.information.livingCost == livingCost){
								compatability += livingCostCompatability;
							}
							if (livingCost == "Irrelevant"){
								compatabilityMax -= livingCostCompatability;
							}
							if(value.information.lifeExpectency == lifeExpectency){
								compatability += lifeExpectencyCompatability;
							}
							if ( lifeExpectency == "Irrelevant"){
								compatabilityMax -= lifeExpectencyCompatability;
							}
							if(value.information.sex == sex) {
								compatability += sexCompatability;
							}
							if (sex == "Irrelevant"){
								compatabilityMax -= sexCompatability;
							}
							if (value.information.size == size) {
								compatability += sizeCompatability;
							}
							if (size == "Irrelevant"){
								compatabilityMax -= sizeCompatability;
							}
							if (value.information.training == training){
								compatability +=trainingCompatability;
							}
							if (training == "Irrelevant"){
								compatabilityMax -= trainingCompatability;
							}
							if (value.information.coatLength == coatLength){
								compatability += coatLengthCompatability;
							}
							if (coatLength == "Irrelevant"){
								compatabilityMax -= coatLengthCompatability;
							}
							if (value.information.neuteredStatus == neuteredStatus){
								compatability += neuteredStatusCompatability;
							}
							if(neuteredStatus == "Irrelevant"){
								compatabilityMax -= neuteredStatusCompatability;
							}
							if (value.information.microChippedStatus == microChippedStatus){
								compatability += microChippedStatusCompatability;
							}
							if ( microChippedStatus == "Irrelevant"){
								compatabilityMax -= microChippedStatusCompatability;
							}
							if (value.information.health == health) {
								compatability += healthCompatability;
							}
							if (health == "Irrelevant"){
								compatabilityMax -= healthCompatability;
							}
							
							finalCompatability = (compatability/compatabilityMax) * 100;


							finalCompatabilityString = finalCompatability.toString();
							value.information.compatability = finalCompatabilityString;
							animalarray.push(value);	
						}
					}
			});

      			dispatch({ type: PREF_ANIMALS_FETCH_SUCCESS, payload: animalarray});
      			Actions.buyerHome();
  			});
		};
	};



export const updateFirstPreferences = ({type, breed, personality,lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health, city, activeCard}) => {
	const {currentUser} = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/preferences/${currentUser.uid}`)
			.set({ type, breed, lifeExpectency, sex, size, personality, training, coatLength, neuteredStatus, microChippedStatus, livingCost, health, city, activeCard})
			.then(user => updateFirstPreferencesSuccess( dispatch, user))
		}
}

export const preferencesFirstFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/preferences`)
	      .on('value', snapshot => { 
	      		 _.forEach( snapshot.val(), (val ) => fetchFirstPreferencesSuccess( dispatch, val));
		});
  	};
}

export const updatePreferences = ({type, breed, personality, lifeExpectency, sex, size, training,  coatLength, neuteredStatus, microChippedStatus, livingCost, health, city, activeCard}) => {
	const {currentUser} = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/preferences/${currentUser.uid}`)
			.set({ type, breed, personality, lifeExpectency, sex, size, training, coatLength, neuteredStatus, microChippedStatus, livingCost, health, city, activeCard})
			.then(user => updatePreferencesSucces( dispatch, user))
		}
}

const fetchFirstPreferencesSuccess = (dispatch, val ) => {
	console.log("Correct")
	dispatch({ 
		type: PREFERENCES_FIRST_FETCH_SUCCESS, 
		payload: {val} 
	});	
	Actions.buyerAnimalListFetcher();
}
const updatePreferencesSucces = (dispatch, user) => {
	dispatch({
		type: PREFERENCE_UPDATE_SUCCESS,
		paylaod: user
	});
	Actions.buyerAccountRouter();
}
const updateFirstPreferencesSuccess = (dispatch, user) => {
	dispatch({
		type: PREFERENCE_UPDATE_SUCCESS,
		paylaod: user
	});
	Actions.buyerRouteToHome();
}