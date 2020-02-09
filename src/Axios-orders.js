import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://burger-builder-react-56588.firebaseio.com/'
});

export default instance;