import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_USER
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}

export function signupUser({email, password}) {
  return function(dispatch){
    axios({
      url: `${ROOT_URL}/signup`,
      data: { email, password },
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(function (error) {
      console.log('error from actions', error.response);
      dispatch(authError(error.response.data.error));
    })
  }
}



export function signinUser({email, password}) {
  return function(dispatch){
    axios({
      url: `${ROOT_URL}/signin`,
      data: { email, password },
      method: 'post',
      responseType: 'json'
    })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(function (error) {
      console.log('error from actions', error);
      dispatch(authError(error));
    });
  }
}
