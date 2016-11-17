import axios from 'axios';
import { SIGNIN_USER } from './types';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function createPost(credentials) {
  const request = axios.post(`${ROOT_URL}/signin`, credentials).then(function(response) {
    alert("success");

    console.log(response);

  })
  .catch(function (error) {
  alert("fail");
    console.log(error);
  });

  return (
    type: SIGNIN_USER,
    payload: request
  );
}
