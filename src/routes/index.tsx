import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
