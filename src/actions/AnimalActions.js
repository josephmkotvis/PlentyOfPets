import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	ANIMAL_UPDATE, 
	ANIMAL_ADD,  
	ANIMALS_FETCH_SUCCESS, 
	ANIMALS_FETCH,
	ANIMAL_SAVE_SUCCESS,
	ANIMAL_REMOVE_SUCCESS
	 } from './types';
import RNFetchBlob from 'react-native-fetch-blob';

export const animalUpdate = ({prop, value}) => {
	return {
		type: ANIMAL_UPDATE,
		payload: {prop, value}
	};
};

export const animalAdd = ({name, type,breed,age,lifeExpectency,sex,weight,size,training,coatLength,health,neuteredState,microChippedStatus,status, livingCost, price, image, compatability}) => {
	const {currentUser} = firebase.auth();
	var d = new Date();
	var n = d.getTime();
	const identification = currentUser.uid + n;
	return(dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/animals/${identification}`)
			.set({name, type, breed, age, lifeExpectency, sex, weight, size, training, coatLength, health, neuteredState, microChippedStatus, status, livingCost, price, image,identification})
				.then(() => {
					firebase.database().ref(`animals/${identification}/information`)
					.set({name, type, breed, age, lifeExpectency, sex, weight, size, training, coatLength, health, neuteredState, microChippedStatus, status, livingCost, price, image, identification, compatability})
						.then(()=> {
							dispatch({ type: ANIMAL_ADD});
							Actions.sellerAnimalList();
						});					
				});
	};
};

export const animalsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/animals`)
      .on('value', snapshot => {
        dispatch({ type: ANIMALS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const animalSave = ({ name, type,breed,age,lifeExpectency,sex,weight,size,training,coatLength,health,neuteredState,microChippedStatus,status, livingCost, price, image, uid}) => {
	const {currentUser} = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/animals/${uid}`)
			.set({ name, type,breed,age,lifeExpectency,sex,weight,size,training,coatLength,health,neuteredState,microChippedStatus,status, livingCost, price, image })
				.then (() => {
					firebase.database().ref(`/animals/${uid}/information`)
						.set({ name, type,breed,age,lifeExpectency,sex,weight,size,training,coatLength,health,neuteredState,microChippedStatus,status, livingCost, price, image })
						.then(() => {
							dispatch({ type: ANIMAL_SAVE_SUCCESS });
							Actions.sellerAnimalList();
						});
				});
	};
};

export const animalDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
			firebase.database().ref(`/users/${currentUser.uid}/animals/${uid}`)
				.remove()
				.then(() =>{
					firebase.database().ref(`/animals/${uid}`)
						.remove()
							.then(() => {
								dispatch({ type: ANIMAL_REMOVE_SUCCESS});
								Actions.sellerAnimalList();
							})
			});
	};
};
