import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './views/landing/Landing';
import Home from './views/home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
