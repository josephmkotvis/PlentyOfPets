import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	CONFIRM_PASSWORD_CHANGED,
	PASSWORD_MATCH_FAILED,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	SIGN_UP_USER_SUCCESS,
	USER_UPDATE,
	USER_UPDATE_SUCCESS,
	SIGN_UP_USER_FAIL,
	SIGN_UP_USER,
	SELLER_INFO_UPDATED_SUCCESS,
	SELLER_INFO_UPDATED_FAIL,
	BUYER_INFO_UPDATED_SUCCESS,
	BUYER_INFO_UPDATED_FAIL,
	BEGIN_SIGN_UP
} from './types';

export const userUpdate = ({prop, value}) =>  {
	return(dispatch) => {
		dispatch({
			type: USER_UPDATE,
			payload: {prop , value }
		});
		console.log(value);
		if (value == 'Seller'){
			Actions.sellerSignUp();
		}
		else if (value == 'Buyer'){
			Actions.buyerSignUp();
		}
	};
};

export const signUpUser = ({ email, password, confirmPassword}) => {
	return(dispatch) => {
		if (PasswordsMatch( password, confirmPassword)){
			dispatch({ type: SIGN_UP_USER});
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then( user => signUpUserSuccess(dispatch, user))
					.catch(() => signUpUserFail(dispatch));
		}
		else {
			dispatch({ type: PASSWORD_MATCH_FAILED})
		}

	};
};

export const signUpBuyerInfo = ({ firstname, lastname,address, city, userState, zipcode, role, currentAnimals, familySize, animalHistory}) => {
	const {currentUser} =  firebase.auth();

		return (dispatch) => {
			firebase.database().ref(`/users/${currentUser.uid}`)
				.push({ firstname, lastname,address, city, userState, zipcode, role, currentAnimals, familySize, animalHistory})
					.then( user => signUpBuyerInfoSuccess(dispatch, user))
						.catch(() => signUpBuyerInfoFail(dispatch));
		};
};

export const signUpSellerInfo = ({ firstname, lastname,address, city, userState, zipcode, role}) => {
	const {currentUser} =  firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}`)
			.push({ firstname, lastname,address, city, userState, zipcode, role})
				.then( user => signUpSellerInfoSuccess(dispatch, user))
					.catch(() => signUpSellerInfoFail(dispatch));
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

export const beginSignUp = () => {
	return( dispatch) => 
		dispatch({type: BEGIN_SIGN_UP});
};

const signUpSellerInfoSuccess = (dispatch, user) =>{
	dispatch({
		type: SELLER_INFO_UPDATED_SUCCESS,
		payload: user
	}); 	
	Actions.sellerAnimalList();
};

const signUpSellerInfoFail = (dispatch, user) => {
	dispatch({
		type: SELLER_INFO_UPDATED_FAIL
	});
};

const signUpBuyerInfoSuccess = (dispatch, user) =>{
	dispatch({
		type: BUYER_INFO_UPDATED_SUCCESS,
		payload: user
	}); 	
};

const signUpBuyerInfoFail = (dispatch, user) => {
	dispatch({
		type:BUYER_INFO_UPDATED_FAIL
	});
};

const signUpUserFail = (dispatch) => {
	dispatch({ type: SIGN_UP_USER_FAIL});
};

const signUpUserSuccess = ( dispatch, user ) => {
		dispatch({
			type: SIGN_UP_USER_SUCCESS,
			payload: user
	});
	Actions.signUpRole();
};

const PasswordsMatch = ( password, confirmPassword) => {
	if(password === confirmPassword){
		console.log("Passwords do match");
		return true;
	}
	else {
		console.log("Passwords do not match");
		return false;
	}
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