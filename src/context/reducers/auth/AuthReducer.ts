import { AuthState } from '../../StateTypes';
import ActionTypes from '../../ActionTypes';
import * as AuthActions from './AuthActions';


const AuthReducer = (state: AuthState, action: ActionTypes): AuthState => {
  switch (action.type) {
    case AuthActions.LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      };

    case AuthActions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.payload.user,
        error: '',
      };

    case AuthActions.LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload.error,
      };

    case AuthActions.LOGOUT:
      return {
        ...state,
        isAuthenticating: false,
        user: '',
        error: '',
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
