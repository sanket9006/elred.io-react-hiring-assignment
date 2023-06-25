import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            render={() => (
              <route.layout>
                <route.component />
              </route.layout>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
