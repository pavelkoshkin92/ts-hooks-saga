import React, { FC, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Auth = lazy(() => import('../features/auth/Auth'));
const Overview = lazy(() => import('../features/overview/Overview'));

const Routes: FC = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/overview" component={Overview} />
            <Redirect to="/" />
        </Switch>
    </Suspense>

);

export default Routes;
