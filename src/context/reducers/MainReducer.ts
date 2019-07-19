import AuthReducer from './auth/AuthReducer';
import LangReducer from './lang/LangReducer';
import { AppState } from '../StateTypes';
import ActionTypes from '../ActionTypes';


const MainReducer = (state: AppState, action: ActionTypes): AppState => ({
  lang: LangReducer(state.lang, action),
  auth: AuthReducer(state.auth, action),
});

export default MainReducer;
