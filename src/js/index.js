import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Home from './containers/AppContainer';
import User from './containers/UserContainer';
import { Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('root')
);
