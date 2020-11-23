import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './home/Home';
import Template from './template/Template';
import NotFound from './notfound/NotFound';

export default function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ () => <Home />} />
            <Route path='/Template' component={ () => <Template />} />
            <Route path='/notfound' component={() => <NotFound />} />
          </Switch>
        </BrowserRouter>
    )
  }