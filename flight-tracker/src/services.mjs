// import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const onGlobalSuccess = (response) => {
  console.log('success yay');
  console.log(response);
  return response.data;
};

const onGlobalError = (err) => {
  console.log('err');
  return Promise.reject(err);
};

const getFlights = (id, dest_id) => {
  const config = {
    method: "GET",
    url: `https://aeroapi.flightaware.com/aeroapi/airports/${id}/flights/to/${dest_id}`,
    headers: { "accept": "application/json", "x-apikey": "n1mKDX7VkUM4lzC6DiqbZy25MwGD3rCq", "Access-Control-Allow-Origin": '*' },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const callExpressAPI = (to, from) => {
  console.log("callExpressAPI");
  console.log('to ', to, 'from ', from);
  const config = {
    method: "GET",
    url: `http://localhost:3001/api/flights/${to}/${from}`,
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { getFlights, callExpressAPI };
