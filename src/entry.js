
// import MenuComponent from './js/components/menu/MenuComponent';
// import navgation from './js/data/navgation.js';

// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


// //路由模块
// import Home from './js/components/home/Home';
// import Archives from './js/components/archives/Archives';
// import Tags from './js/components/tags/Tags';
// import About from './js/components/about/About';
// import Links from './js/components/links/Links';
// import Books from './js/components/books/Books';
// import Todos from './js/components/Todos';

// const App = ({ children }) => (
//     <div>
//         <MenuComponent navs={navgation} />
//         <div className="main">{children}</div>
//     </div>
// )

// const routes = (
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <Route path="/home" component={Home}/>
//             <Route path="/archives" component={Archives}/>
//             <Route path="/tags" component={Tags}/>
//             <Route path="/about" component={About}/>
//             <Route path="/links" component={Links}/>
//             <Route path="/books" component={Books}/>
//             <Route path="/todos" component={Todos}/>
//         </Route>
//     </Router>
// )

// render(routes, document.getElementById('app'));

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './js/reducers';
import App from './js/components/App';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)