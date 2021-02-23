import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ItemPage, ItemsPage, SearchPage } from '../pages';
import { PATHS } from './paths';

const Routes = (): ReactElement => {
  return (
    <Router basename="/">
      <Switch>
        <Route path={PATHS.item}>
          <ItemPage />
        </Route>
        <Route path={PATHS.items}>
          <ItemsPage />
        </Route>
        <Route exact path={PATHS.search}>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
