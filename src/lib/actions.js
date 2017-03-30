import C from './constants';

const saveToken = (token) => ({
  type: C.SAVE_TOKEN,
  payload: token,
});

export default saveToken;
