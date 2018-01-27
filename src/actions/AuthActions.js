import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
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
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text		
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const confirmPasswordChanged = (text) => {
	return {
		type: CONFIRM_PASSWORD_CHANGED,
		payload: text
	};
};
 
export const firstnameChanged = (text) => {
	return {
		type: FIRST_NAME_CHANGED,
		payload	: text
	};
};

export const lastnameChanged = (text) => {
	return {
		type: LAST_NAME_CHANGED,
		payload: text
	};
};

export const addressChanged = (text) => {
	return {
		type: ADDRESS_CHANGED,
		payload: text
	};
};

export const cityChanged = (text) => {
	return{
		type: CITY_CHANGED,
		payload: text
	};
};

export const stateChanged = (text) => {
	return{
		type: STATE_CHANGED,
		payload: text
	};
};

export const zipcodeChanged = (text) => {
	return{
		type: ZIPCODE_CHANGED,
		payload: text
	};
};

export const roleUpdate = (text) => {
	return {
		type: ROLE_UPDATE,
		payload: text
	};
};

export const updateUser = ({ 			
			email, 
			password, 
			comfirmPassword, 
			firstname, 
			lastname,
			address, 
			city, 
			state, 
			zipcode
		}) => {
	const {currentUser} = firebase.auth();
return (dispatch) => {
		dispatch({ type: UPDATE_USER});
		if (PasswordsMatch(password, comfirmPassword)){
				firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => updateUserSuccess(dispatch, user))
				.catch	(() => updateUserFail(dispatch));
		}
		else {
			dispatch({ type: PASSWORD_MATCH_FAILED})
		};
	};
};

export const loginUser= ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email, password )
			.then(user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFail(dispatch));
		};
	};
const PasswordsMatch = ( password, comfirmPassword) => {
	if(password != comfirmPassword){
		console.log("Passwords do not match");
		return false;
	}
	else {
		console.log("Passwords do match");
		return true;
	}
};
const updateUserSuccess = (dispatch) => {
	dispatch({
	 type: UPDATE_USER_SUCCESS,
	 payload: user
	  });
};
const updateUserFail = (dispatch) => {
	dispatch({ type: UPDATE_USER_FAIL});
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};