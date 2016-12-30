import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Post from './components/Post';
import Home from './components/Home';
import './main.css';
import {Router,Route, browserHistory,IndexRoute} from "react-router";
const router=(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/posts/:postId' component={Post}/>
    </Route>
  </Router>
)
ReactDOM.render(router, document.getElementById('app'));
