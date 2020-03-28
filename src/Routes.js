import React from 'react';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';

import HomePage from './HomePage';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div id="page">
            <Route exact path="/" component={HomePage} />
        </div>
    </Router>
);
