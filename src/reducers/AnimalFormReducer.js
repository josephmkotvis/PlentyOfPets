import { ANIMAL_UPDATE, ANIMAL_ADD, ANIMAL_SAVE_SUCCESS, ANIMAL_REMOVE_SUCCESS} from '../actions/types';

const INITIAL_STATE={
	name: '',
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
	status: '',
	livingCost: '',
	price: '',
	image: '',
	imageName: '',
	imageURL: ''
};

export default (state = INITIAL_STATE, action) => {
	switch( action.type ){
		case ANIMAL_UPDATE:
			return {...state, [action.payload.prop]: action.payload.value};
		case ANIMAL_ADD:
			return INITIAL_STATE;
		case ANIMAL_SAVE_SUCCESS:
			return INITIAL_STATE;
		case ANIMAL_REMOVE_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	}
};