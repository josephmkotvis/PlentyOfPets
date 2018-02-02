import { 
	PASSWORD_MATCH_FAILED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	USER_UPDATE,
	USER_UPDATE_FAIL,
	SIGN_UP_USER_SUCCESS,
	SIGN_UP_USER_FAIL,
	SIGN_UP_USER,
	SELLER_INFO_UPDATED_SUCCESS,
	SELLER_INFO_UPDATED_FAIL,
	BUYER_INFO_UPDATED_SUCCESS,
	BUYER_INFO_UPDATED_FAIL,
	BEGIN_SIGN_UP,
	USER_UPDATE_SUCCESS,
	USER_INFO_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	confirmPassword: '',
	firstname: '',
	lastname: '',
	address: '',
	city: '',
	userState: '',
	zipcode: '',
	user: null,
	error: '',
	loading: false,
	role: '',
	currentAnimals: '',
	familySize: '',
	animalHistory: '',
	uid: '',
	sellType: ''
};

export default (state = INITIAL_STATE, action ) => {
	console.log(action);
	switch (action.type){
		case PASSWORD_MATCH_FAILED:
			return {...state, error: 'Password Do Not Match', password: '', confirmPassword: '', loading: false}
		case LOGIN_USER:
			return { ... state, loading: true, error: ''};
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload};
		case LOGIN_USER_FAIL:
			return { ... state, error: 'Authentication Failed.', password: '', confirmPassword: '', loading: false};
		case USER_UPDATE:
			return {...state, [action.payload.prop]: action.payload.value };
		case USER_UPDATE_SUCCESS:
			return INITIAL_STATE;
		case USER_UPDATE_FAIL:
			return {...state, error: 'Account Update Failed', password: '', confirmPassword: '', loading: false};
		case BEGIN_SIGN_UP:
			return INITIAL_STATE;
		case SIGN_UP_USER:
			return {...state, loading: true, error: ''};
		case SIGN_UP_USER_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload};
		case SIGN_UP_USER_FAIL:
			return {...state, error: 'Account Sign Up Failed', password: '', confirmPassword: '', loading: false};
		case SELLER_INFO_UPDATED_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload};
		case SELLER_INFO_UPDATED_FAIL:
			return {...state, error: 'Information Update Fail'}
		case BUYER_INFO_UPDATED_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload};
		case BUYER_INFO_UPDATED_FAIL:
			return {...state, error: 'Information Update Fail'}
		case USER_INFO_FETCH_SUCCESS:
			return action.payload.val;
		default:
			return state;
	}
};