import { LangState } from '../../StateTypes';
import * as LangActions from './LangActions';
import Actions from '../../ActionTypes';


const LangReducer = (state: LangState, action: Actions): LangState => {
  switch (action.type) {
    case LangActions.SET_LANG_ENG:
      return {
        ...state,
        selected: 'eng',
      };

    case LangActions.SET_LANG_GER:
      return {
        ...state,
        selected: 'ger',
      };

    case LangActions.SET_LANG_ESP:
      return {
        ...state,
        selected: 'esp',
      };

    default:
      return {
        ...state,
      };
  }
};

export default LangReducer;
