import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
