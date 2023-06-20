import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import NotFound from './views/notFound/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />

        {/* En caso de que no se encuentre la ruta */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
