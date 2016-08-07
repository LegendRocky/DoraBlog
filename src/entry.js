
import MenuComponent from './js/components/menu/MenuComponent';
import navgation from './js/data/navgation.js';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


//路由模块
//首页
import Home from './js/components/home/Home';

//归档
import About from './js/components/about/About';

const App = ({ children }) => (
    <div>
        <MenuComponent navs={navgation} />
        <div className="main">{children}</div>
    </div>
)

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
)

render(routes, document.getElementById('app'));
