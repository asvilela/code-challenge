import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import Home from './scenes/home/Home'
import Journey from './scenes/journey/Journey'
import Monitoring from './scenes/monitoring/Monitoring'

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Monitoring}/>
        <Route exact path="/journey" component={Journey}/>
        <Route exact path="/monitoring" component={Monitoring}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
