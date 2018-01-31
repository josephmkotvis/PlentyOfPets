import {
  ANIMALS_FETCH_SUCCESS,
  ANIMALS_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANIMALS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};