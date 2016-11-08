var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Layout = require('../components/Layout');
var Login = require('../components/Login');
var Recent = require('../components/Recent');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <Route path='/login' component={Login} />
      <Route path='/recent' component={Recent} />
    </Route>
  </Router>
);

module.exports = routes;