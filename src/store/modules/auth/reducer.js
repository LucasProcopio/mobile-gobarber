import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draftState.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draftState.signed = true;
        draftState.token = action.payload.token;
        draftState.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draftState.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draftState.signed = false;
        draftState.token = null;
        break;
      }
      default:
    }
  });
}
