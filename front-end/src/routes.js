import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router
} from 'react-router-dom';
import { Provider } from 'react-redux';


import NotFound from './notfound/NotFound';

export default function Routes() {
    return (
        <NotFound />
    )
  }