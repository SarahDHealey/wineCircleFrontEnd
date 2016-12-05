import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  authenticated: false
}

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_ERROR:
    // console.log('from reducer',action.payload);
    return {...state, error: action.payload};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_USER:
      return {...state, error: '', authenticated: true};
    case FETCH_MESSAGE:
      return {...state, message: action.payload}
    }
    return state;
}
