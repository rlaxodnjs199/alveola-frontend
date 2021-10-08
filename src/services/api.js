import config from 'config';
import axios from './axiosProvider';

export function deidentifyScanSelected(scanSelected) {
  axios
    .post(config.apiEndpoints.deidentify, scanSelected)
    .then((response) => console.log(response));
}
