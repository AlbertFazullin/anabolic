import objectAssign from 'object-assign';

import { jwtReducer } from 'fs-jwt-redux-devtools';

import token from './token';
import github from './github';
import user from './user';

export default objectAssign({}, { jwt: jwtReducer }, token, github, user);
