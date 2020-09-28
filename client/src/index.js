import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// Rest-ful conventions - standardize system of routes
// and request methods to operate all these actions

// Action
// 1 - List all records (GET) (Route -> /streams)
// 2 - Get on unique record (GET) (Route -> /streams/:id)
// 3 - Create a record (POST) (Route -> /streams)
// 4 - Update a record (PUT) (Route -> /streams/:id)
// 5 - Delete a record (DELETE) (Route -> /streams/id)

// Portals
// Portals prove a first-class to render children into a DOM node that exists
// outside the DOM hierarchy of the parent component
// Used to not redo css