import axios from 'axios';

const apiFetcher = (url) => axios.get(url).then((response) => response.data);

export default apiFetcher;
