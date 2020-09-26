import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Create Stream
export const createStream = (formValues) => async (dispatch) => {
  // Rest-ful Convention
  const response = await streams.post('/streams', formValues);

  // Send data to reducer
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

// Get all streams
export const fetchStreams = () => async (dispatch) => {
  // Rest-ful Convention
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// Get one stream
export const fetchStream = (id) => async (dispatch) => {
  // Rest-ful Convention
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// Get edit stream
export const editStream = (id, formValues) => async (dispatch) => {
  // Rest-ful Convention
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

// Delete Stream
export const deleteStream = (id) => async (dispatch) => {
  // Rest-ful Convention
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
