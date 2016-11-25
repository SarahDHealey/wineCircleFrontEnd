import axios from 'axios';
import { SIGNIN_USER } from './types';
import { browserHistory } from 'react-router';
import { AUTH_ERROR } from './types';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function authError(error) {
  return { error, type: AUTH_ERROR };
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
      dispatch(authError(response.error))
    });
  }
}
