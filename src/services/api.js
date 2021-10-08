import config from 'config';
import { mutate } from 'swr';
import axios from './axiosProvider';

export function deidentifyScanSelected(scanSelected) {
  axios.post(config.apiEndpoints.deidentify, scanSelected).then(() => {
    mutate(config.apiEndpoints.deid);
  });
}
