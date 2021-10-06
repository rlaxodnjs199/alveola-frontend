import axios from 'axios';

export const apiFetcher = url => axios.get(url).then(response => response.data)
