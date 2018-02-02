import { ANIMAL_UPDATE, ANIMAL_APPLICANTS_FETCH_SUCCESS, ANIMAL_ADD, ANIMAL_SAVE_SUCCESS, ANIMAL_REMOVE_SUCCESS} from '../actions/types';

const INITIAL_STATE={
	name: '',
	type: '',
	personality: '',
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
	imageURL: '',
	applicants: {},
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
		case ANIMAL_APPLICANTS_FETCH_SUCCESS:
			return {...state, applicants: action.payload};
		default:
			return state;
	}
};