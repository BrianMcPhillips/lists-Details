import React from 'react';
import Header from '../Header';
import List from '../List';
import Detail from '../Detail';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <List {...routerProps} />}
          />
          <Route
            path="/detail/:id"
            exact
            render={(routerProps) => <Detail {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
