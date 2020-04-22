import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
