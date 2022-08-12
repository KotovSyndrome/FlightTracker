// import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const onServerSuccess = (response) => {
  console.log('server success yay');
  console.log(Date.now());
  console.log(response.data);
  return response.data;
};

const onGlobalSuccess = (response) => {
<<<<<<< HEAD
  console.log('success yay');
  console.log(response);
=======
  console.log('AeroAPI success yay');
  console.log(Date.now());
  console.log(response.data);
>>>>>>> master
  return response.data;
};

const onGlobalError = (err) => {
  console.log('err');
  return Promise.reject(err);
};

const getFlights = async (id, dest_id) => {
  console.log('sending request to AeroAPI in getFlights()');
  const config = {
    method: "GET",
    url: `https://aeroapi.flightaware.com/aeroapi/airports/${id}/flights/to/${dest_id}`,
    headers: { "accept": "application/json", "x-apikey": "n1mKDX7VkUM4lzC6DiqbZy25MwGD3rCq", "Access-Control-Allow-Origin": '*' },
  };
  return await axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

const callExpressAPI = async (to, from) => {
  console.log("callExpressAPI");
  console.log('to ', to, 'from ', from);
  const config = {
    method: "GET",
    url: `http://localhost:3001/api/flights/${to}/${from}`,
  };
  return await axios(config).then(onServerSuccess).catch(onGlobalError);
};

export { getFlights, callExpressAPI };
