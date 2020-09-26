import axios from 'axios';

// Connect to json server
export default axios.create({
  baseURL: 'http://localhost:3001',
});
