import objectAssign from 'object-assign';

import jwtDevReducer from '../lib/saveTokenReducer';

import token from './token';
import github from './github';
import user from './user';

export default objectAssign({}, { jwt: jwtDevReducer }, token, github, user);
