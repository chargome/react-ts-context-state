import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as Routes from '../routes/Index';
import { StateProvider } from '../../context/State';


const App: React.FC = (): JSX.Element => (
  <StateProvider>
    <BrowserRouter>
      <Route path="/" exact component={Routes.Home} />
      <Route path="/login" exact component={Routes.Login} />
    </BrowserRouter>
  </StateProvider>
);

export default App;
