
import axios from 'axios';
import {baseConfig,axiosFactory} from '../../config';
const { baseURL, timeout } = baseConfig;
const fetch = axios.create(baseConfig)
axiosFactory(fetch)
const crossFetch = axios.create({ baseURL, timeout ,withCredentials:true})
axiosFactory(crossFetch)
export {
  fetch,
  crossFetch
}
