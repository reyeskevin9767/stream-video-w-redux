import React from 'react';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class GoogleAuth extends React.Component {
  componentDidMount() {
    // Loads the rest of googles api (client version)
    window.gapi.load('client:auth2', () => {
      // Scope => What parts does the app gain access to
      window.gapi.client.init({ clientId: CLIENT_ID, scope: 'email' });
    });
  }

  render() {
    return <div>googleauth</div>;
  }
}

export default GoogleAuth;
