import React from 'react';
import { Router } from '@reach/router';
import { hot } from 'react-hot-loader';
import IndexPage from './pages';
import PageB from './pages/b';
import NotFoundPage from './pages/not-found';

const App = () => (
  <Router basepath="/admin">
    <IndexPage path="/" />
    <PageB path="b" />
    <NotFoundPage default />
  </Router>
);

export default hot(module)(App);
