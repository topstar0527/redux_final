import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

const initalState = fromJS({
  currentUser: null,
});

function authReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.LOGIN_SUCCESS:
      return state.set('currentUser', fromJS(action.data));
    case CONSTANTS.LOGOUT:
      return state.delete('currentUser');
    case CONSTANTS.PROFILE_REQUEST_SUCCESS:
      return state.set('currentUser', fromJS(action.data));
    default:
  }

  return state;
}

export default authReducer;
