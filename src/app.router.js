import React, { lazy, Suspense} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import PreLoader from './components/preLoader'

const Home = lazy(()=> import('./views/home'));
const About = lazy(()=> import('./views/about'));
const Contact = lazy(()=> import('./views/contact'));

function AppRouter() {
    return (
        <Switch>
            <Suspense fallback={<PreLoader />} >
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/*" to="/home" />
            </Suspense>
        </Switch>
    )
}

export default AppRouter
