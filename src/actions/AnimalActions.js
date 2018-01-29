import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { ANIMAL_UPDATE, ANIMAL_ADD } from './types';

export const animalUpdate = ({prop, value}) => {
	return {
		type: ANIMAL_UPDATE,
		payload: {prop, value}
	};
};

export const animalAdd = ({type,breed,age,lifeExpectency,sex,weight,size,training,coatLength,health,neuteredState,microChippedStatus,status}) => {
	const {currentUser} = firebase.auth();

	return(dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/animals`)
			.push({ type, breed, age, lifeExpectency, sex, weight, size, training, coatLength, health, neuteredState, microChippedStatus, status})
				.then(()=> {
					dispatch({ type: ANIMAL_ADD});
					Actions.sellerAnimalList();
			});
	};
};