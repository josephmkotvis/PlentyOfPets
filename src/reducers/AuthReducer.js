import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	CONFIRM_PASSWORD_CHANGED,
	PASSWORD_MATCH_FAILED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	ADDRESS_CHANGED,
	CITY_CHANGED,
	STATE_CHANGED,
	ZIPCODE_CHANGED,
	ROLE_UPDATE
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
};

export default (state = INITIAL_STATE, action ) => {
	console.log(action);
	switch (action.type){
		case EMAIL_CHANGED:
			return { ...state, email: action.payload};
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case CONFIRM_PASSWORD_CHANGED:
			return {...state, confirmPassword: action.payload };
		case PASSWORD_MATCH_FAILED:
			return {...state, error: 'Password Do Not Match', password: '', comfirmPassword: '', loading: false}
		case FIRST_NAME_CHANGED:
			return { ...state, firstname: action.payload };
		case LAST_NAME_CHANGED:
			return { ...state, lastname: action.payload };
		case ADDRESS_CHANGED:
			return { ...state, address: action.payload };
		case CITY_CHANGED:
			return { ...state, city: action.payload };
		case STATE_CHANGED:
			return { ...state, userState: action.payload };
		case ZIPCODE_CHANGED:
			return { ...state, zipcode: action.payload };
		case ROLE_UPDATE:
			return { ...state, role: action.payload };
		case LOGIN_USER:
			return { ... state, loading: true, error: ''};
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload};
		case LOGIN_USER_FAIL:
			return { ... state, error: 'Authentication Failed.', password: '', confirmPassword: '', loading: false};
		case UPDATE_USER:
			return { ... state, loading: true, error: ''};
		case UPDATE_USER_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload }
		case UPDATE_USER_FAIL:
			return {...state, error: 'Account Update Failed', password: '', confirmPassword: '', loading: false}
		default:
			return state;
	}
};