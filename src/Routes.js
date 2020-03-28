import React from 'react';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';

import HomePage from './HomePage';
import Page1 from './Page1';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div id="page">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/page1" component={Page1} />
        </div>
    </Router>
);
