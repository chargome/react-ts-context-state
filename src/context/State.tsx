import React, { useReducer, createContext, useContext } from 'react';

import { AppState } from './StateTypes';
import InitialAppState from './InitialAppState';
import ActionTypes from './ActionTypes';
import MainReducer from './reducers/MainReducer';


const stateCtx = createContext(InitialAppState);
const dispatchCtx = createContext((() => 0) as React.Dispatch<ActionTypes>);

interface ProviderProps {
  children?: any;
}

export const StateProvider = (props: ProviderProps): JSX.Element => {
  const { children } = props;
  const [state, dispatch] = useReducer(MainReducer, InitialAppState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>
        {children}
      </stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = (): React.Dispatch<ActionTypes> => useContext(dispatchCtx);


export const useGlobalState = <K extends keyof AppState>(property: K) => {
  const state = useContext(stateCtx);
  return state[property];
};
