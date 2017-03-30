import save from './actions';
import Auth from './Auth';

const saveToken = tokenEvents => ({ dispatch }) => next => (action) => {
  if (tokenEvents.indexOf(action.type) > -1) {
    const { payload } = action;
    const authDecodedPayload = Auth.getPayload(payload.token.auth_token);
    payload.decoded = authDecodedPayload;
    dispatch(save(payload));
  }
  return next(action);
};

export default saveToken;
