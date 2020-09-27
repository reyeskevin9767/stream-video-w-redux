import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

// Need to return a new object for redux to render
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // mapKeys creats a new object where second arugment becomes a
      // key for each element in payload
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    // New object with all of state and add an id
    case FETCH_STREAM:
      // Keys -> Id of stream, Value -> stream itself
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
