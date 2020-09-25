import { SIGN_OUT, SIGN_IN } from '../actions/types';

const INITAL_STATE = {
  isSignedIn: null,
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
