import Router from 'react-router';
import React from 'react';

import AppContainer from './lib/app-container';
import NaiveApp from './lib/naive/components/app';
import ImmutableApp from './lib/immutable/components/app';

const routes = (
  <Router.Route handler={AppContainer} path="/">
    <Router.Route path="naive" handler={NaiveApp}/>
    <Router.Route path="immutable" handler={ImmutableApp}/>
  </Router.Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
