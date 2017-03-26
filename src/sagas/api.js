import request from 'superagent';
import { registerUrl, loginUrl, userApiGitHub } from '../actions/urls';

export const registerUser = user =>
  request
    .post(registerUrl)
    .send(user)
    .set('Accept', 'application/json');

export const loginUser = user => request
    .post(loginUrl)
    .send(user)
    .set('Accept', 'application/json');

export const fetchUser = login => request
    .get(`${userApiGitHub}${login}`)
    .set('Accept', 'application/json');
