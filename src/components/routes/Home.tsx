import React from 'react';
import { useDispatch, useGlobalState } from '../../context/State';

import * as LangActions from '../../context/reducers/lang/LangActions';

const Home: React.FC = (): JSX.Element => {
  const langState = useGlobalState('lang');
  const dispatch = useDispatch();


  const changeLangToSpanish = (): void => dispatch({
    type: LangActions.SET_LANG_ESP,
  });

  const changeLangToGerman = (): void => dispatch({
    type: LangActions.SET_LANG_GER,
  });

  return (
    <div>
      Home
      <br />
      Selected lang:
      { langState.selected }
      <button onClick={changeLangToGerman} type="button">
        DEUTSCH
      </button>
      <button onClick={changeLangToSpanish} type="button">
        ESP
      </button>
    </div>
  );
};


export default Home;
