import axios from 'axios';

const API_KEY ='3de179f9827af9aff6418b26c4f26fea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// seperated into variable to keep our action types consistent 
// between action creaters & reducers ... simply call variable in each
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  // console.log('Request:', request);

  // payload is an optional property that goes along with actions that
  // contains some additional data that describes that particular action
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}