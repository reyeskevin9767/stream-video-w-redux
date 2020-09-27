import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// react-router-dom -> Navigation for dom-based apps
// React Router -> Only cares after the domain url
// BrowserRouter (Router) -> Listens to 'history' for changes to the url

// Navigation
// Cannot use archor tags, as its dumps all react/redux state data
// Need to use Link to nagivate between pages,
// React Router prevents the browser from navigating to the new page
// and fetching new index.html file

// OAuth Authentication
// 1. User authenticates with service provider
// 2. User authorizes our app to access their information
// 3. Outside provider tells us about the user
// 4. Trust the outside provider to correctly handle identification of a user
// 5. OAuth can be used for user identification in our app and our app making
// 6. actions on behalf of user

//OAuth for JS Broswer Apps
// 1. Results in a 'token' that a broswer app can use to make requests
// on behalf of the user
// 2. Usually used when we have an app that only needs to access user data
// while they are logged in
// 3. Very easy to set up thanks to Google's JS lib to automate flow

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
