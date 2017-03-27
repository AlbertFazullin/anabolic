import objectAssign from 'object-assign';
import token from './token';
import github from './github';
import user from './user';

export default objectAssign({}, token, github, user);
