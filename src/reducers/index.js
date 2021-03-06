import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AnimalFormReducer from './AnimalFormReducer';
import AnimalReducer from './AnimalReducer';
import BuyerReducer from './BuyerReducer';
import BuyerPreferencesFormReducer from './BuyerPreferencesFormReducer';

export default combineReducers({
  auth: AuthReducer,
  animalForm: AnimalFormReducer,
  animals: AnimalReducer,
  buyer: BuyerReducer,
  preferences: BuyerPreferencesFormReducer

});