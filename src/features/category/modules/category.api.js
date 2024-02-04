// import qs from 'query-string';

import axiosService from '@src/modules/axiosService';
// import {API_ENDPOINT} from '@env';

const API_ENDPOINT = 'https://65bd20f0b51f9b29e932f698.mockapi.io/groceries';
const route = 'category';

export const getAllCategoryAPI = () => {
  log('zoooo');
  return axiosService.get(`${API_ENDPOINT}`);
};
