var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Layout = require('../components/Layout');
var Login = require('../containers/LoginContainer');
var Recent = require('../containers/RecentContainer');
var Contacts = require('../components/Contacts');
var Conversation = require('../containers/ConversationContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Login} /> //make login active if other routes are not specified
      <Route path='/recent' component={Recent} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/conversation/:userId' component={Conversation} />
    </Route>
  </Router>
);

module.exports = routes;