import { PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS, PREF_ANIMALS_FETCH_SUCCESS, PREFERENCES_FETCH_SUCCESS, PREFERENCES_FIRST_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = {

	type : '',
	breed : '',
	lifeExpectency : '',
	sex : '',
	size : '',
	training : '',
	coatLength : '',
	neuteredStatus : '',
	microChippedStatus : '',
	livingCost : '',
	health : '',
	city: '',
	activeCard: 0,
	animals: {},

};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case PREFERENCE_UPDATE:
			return {...state, [action.payload.prop]: action.payload.value };
		case PREFERENCE_UPDATE_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload};	
		case  PREFERENCES_FETCH_SUCCESS:
			return action.payload.val;
		case PREF_ANIMALS_FETCH_SUCCESS:
			return {...state, animals: action.payload};
		case PREFERENCES_FIRST_FETCH_SUCCESS:
			return action.payload.val;
		default:
			return state;
	}
};	