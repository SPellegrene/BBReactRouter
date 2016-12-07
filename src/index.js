import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Stores from './Stores'
import About from './About'
import Home from './Home'
import NoMatch from './NoMatch';
import './index.css';



ReactDOM.render((

  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Stores" component={Stores}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>

), document.getElementById('root'))
