import Axios from 'axios';
import { getBaseUrl, getCurrentSessionToken } from '../utils/api';

const axios = Axios.create({
  baseURL: getBaseUrl(),
});

axios.defaults.headers.common.Authorization = getCurrentSessionToken();

export default axios;
