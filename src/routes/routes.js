import React from 'react';
import { Route, Router, Switch } from 'wouter';

import ErrorScreen from '~/screens/404';
import AboutScreen from '~/screens/about-screen';
import HomeScreen from '~/screens/home-screen';

const Routes = () => {
    return (
        <Router>
            <React.Suspense fallback={<h1>Loading....</h1>}>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />

                    {/* if none of the route is matched */}
                    <Route component={ErrorScreen} />
                </Switch>
            </React.Suspense>
        </Router>
    );
};

export default Routes;
