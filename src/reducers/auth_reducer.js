import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  authenticated: false
}

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_ERROR:
    return {...state, authenticated: false};
    console.log('failed from reducer');
    case UNAUTH_USER:
      console.log('failed', action);
      console.log('failed from reducer');
      return {...state, authenticated: false};
    case AUTH_USER:
      console.log('success', action);
      return {...state, authenticated: true};
    }
    return state;
}
