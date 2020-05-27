import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <div className="container">
      <Route path="/" component={Dashboard} exact />
      <Route path="/about" component={About} />
    </div>
  </Switch>
);

export default Routes;
