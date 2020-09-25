import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // Loads the rest of googles api (client version)
    window.gapi.load('client:auth2', () => {
      // Scope => What parts does the app gain access to
      window.gapi.client
        .init({ clientId: CLIENT_ID, scope: 'email' })
        .then(() => {
          // Get access to auth object
          this.auth = window.gapi.auth2.getAuthInstance();

          // Check if user is currently logged in
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          // Listen for any changes to authication status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Function is called when authication status changes
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  // Helper Functions - Sign In and Sign Out of App
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutCkick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
