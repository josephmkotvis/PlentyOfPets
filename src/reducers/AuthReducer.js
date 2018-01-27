import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	SIGNUP_USER,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAIL,
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
 email: '',
 password: '',
 firstname: '',
 lastname: '',
 user: null,
 error: '',
 loading: false
};

export default (state = INITIAL_STATE, action ) => {
	console.log(action);
	switch (action.type){
		case EMAIL_CHANGED:
			return { ...state, email: action.payload};
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case FIRST_NAME_CHANGED:
			return { ...state, firstname: action.payload };
		case LAST_NAME_CHANGED:
			return { ...state, lastname: action.payload };
		case LOGIN_USER:
			return { ... state, loading: true, error: ''};
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload};
		case LOGIN_USER_FAIL:
			return { ... state, error: 'Authentication Failed.', password: '', loading: false};
		case SIGNUP_USER:
			return { ... state, loading: true, error: ''};
		case SIGNUP_USER_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload }
		case SIGNUP_USER_FAIL:
			return {...state, error: 'Sign Up Failed', password: '', loading: false}
		default:
			return state;
	}
};