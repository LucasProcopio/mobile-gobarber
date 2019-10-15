import produce from 'immer';

const INITAL_STATE = {
  profile: null,
};

export default function(state = INITAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draftState.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draftState.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draftState.profile = null;
        break;
      }
      default:
    }
  });
}
