import React from 'react';

// Connect to action creator
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from  './StreamForm';

class StreamCreate extends React.Component {
  // formValues hold the values that were submitted
  onSubmit = (formValues) => {
    // Pass all formValues to action creator
    this.props.createStream(formValues);
  };

  // handleSubmit from redux
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
