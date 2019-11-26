import request from 'src/utils/request';

const endPoint = process.env.REACT_APP_ENDPOINT;

const getDashboardTable = () => {
  return request(`${endPoint}/table`, { method: 'GET' });
};

export { getDashboardTable };
