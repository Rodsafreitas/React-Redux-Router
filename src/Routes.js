import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Coin from './components/Coin';

const Routes = () => {

    return (
        <Router>
            <div>
                    <Header />

                    <Switch basename="">
                        <Route path='/' component={Home} exact/>                     
                        <Route path='*' component={Home} />                        
                    </Switch>               
            </div>
        </Router>
    );
};

export default Routes;