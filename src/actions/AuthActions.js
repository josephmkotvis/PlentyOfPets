import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
	FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
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

export const roleUpdate = (text) => {
	return {
		type: ROLE_UPDATE,
		payload: text
	};
};

export const updateUser = ({ email, password}) => {
		const {currentUser} = firebase.auth();
return (dispatch) => {
	dispatch({ type: UPDATE_USER});
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => signUpUserSuccess(dispatch, user))
			.catch	(() => signUpUserFail(dispatch));
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