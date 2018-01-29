import { ANIMAL_UPDATE } from '../actions/types';

const INITIAL_STATE={
	type: '',
	breed: '',
	age: '',
	lifeExpectency: '',
	sex: '',
	weight: '',
	size: '',
	training: '',
	coatLength: '',
	health: '',
	neuteredState: '',
	microChippedStatus: '',
	status: ''
};

export default (state = INITIAL_STATE, action) => {
	switch( action.type ){
		case ANIMAL_UPDATE:
			return {...state, [action.payload.prop]: action.payload.value};
		default:
			return state;
	}
};