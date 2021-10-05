import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Product from '../pages/Product';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/catalog/:slug" component={Product} exact />
            <Route path="/catalog" component={Catalog} exact />
            <Route path="/cart" component={Cart} exact />
        </Switch>
    );
};

export default Routes;
