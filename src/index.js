import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import WineProfile from './components/wine_profile';
import WelcomeLayout from './components/welcome_layout'
import ProfileLayout from './components/profile_layout'
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//If we have a token, consider the user to be signed in
if (token) {
  //we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={WelcomeLayout}>
        <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="wine_profile" component={RequireAuth(WineProfile)} />
        </Route>
      </Route>
      <Route component={ProfileLayout}>
        <Route path="/profile" component={App}>
          <IndexRoute component={Welcome}/>
          <Route path="signin" component={Signin} />
          <Route path="signout" component={Signout} />
          <Route path="signup" component={Signup} />
          <Route path="wine_profile" component={RequireAuth(WineProfile)} />
        </Route>
      </Route>
    </Router>

  </Provider>
  , document.querySelector('.app'));
