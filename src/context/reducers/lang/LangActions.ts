// type needed for union syntax
export type LangActions =
  | { type: 'SET_LANG_ENG' }
  | { type: 'SET_LANG_GER' }
  | { type: 'SET_LANG_ESP' };

export const SET_LANG_ENG = 'SET_LANG_ENG';
export const SET_LANG_GER = 'SET_LANG_GER';
export const SET_LANG_ESP = 'SET_LANG_ESP';
