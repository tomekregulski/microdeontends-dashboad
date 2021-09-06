import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassname,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassname = createGenerateClassname({
  productionPrefix: 'ma',
});

export default () => {
  return (
    <div>
      <BrowserRouter>
        <StylesProvider generateClassname={generateClassname}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};
