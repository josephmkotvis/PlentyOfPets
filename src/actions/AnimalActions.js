import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { ANIMAL_UPDATE } from './types';

export const animalUpdate = ({prop, value}) => {
	return {
		type: ANIMAL_UPDATE,
		payload: {prop, value}
	};
};
