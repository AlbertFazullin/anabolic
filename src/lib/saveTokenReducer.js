import C from './constants';

export default(state = {}, { type, payload }) => {
  switch (type) {
  case C.SAVE_TOKEN: {
    return { ...state, ...payload };
  }
  default:
    return state;
  }
};
