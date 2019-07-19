import { LangActions } from './reducers/lang/LangActions';
import { AuthActions } from './reducers/auth/AuthActions';


type ActionTypes =
  | AuthActions
  | LangActions;

export default ActionTypes;
