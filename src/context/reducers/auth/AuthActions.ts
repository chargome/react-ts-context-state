// neccessary for type unions
export type AuthActions =
  | {
    type: 'LOGIN_USER_REQUEST';
  }
  | {
    type: 'LOGIN_USER_SUCCESS';
    payload: {
      user: string;
    };
  }
  | {
    type: 'LOGIN_USER_ERROR';
    payload: {
      error: string;
    };
  }
  | {
    type: 'LOGOUT';
  };

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT = 'LOGOUT';
