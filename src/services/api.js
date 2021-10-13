import config from 'config';
import { mutate } from 'swr';
import axios from './axiosProvider';

export function deidentifyScan(CTscan) {
  return axios.post(config.apiEndpoints.deid, CTscan).then(() => {
    mutate(config.apiEndpoints.deid);
  });
}
