import { AppState } from './StateTypes';


const InitialAppState: AppState = {
  lang: {
    selected: 'eng',
  },
  auth: {
    user: '',
    isAuthenticating: false,
    error: '',
  },
};

export default InitialAppState;
