import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  // Component fetches the datae
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

// Reference to the props in the streamEdit
const mapStateToProps = (state, ownProps) => {
  // Select the stream from the store using ownProps to get it using the id
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
