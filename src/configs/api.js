import axios from "axios";

const accuweather = axios.create({
  baseURL: process.env.REACT_APP_ACCUWEATHER_URL,
  params: {
    apikey: process.env.REACT_APP_ACCUWEATHER_KEY,
  },
});

const unsplash = axios.create({
  baseURL: process.env.REACT_APP_UNSPLASH_URL,
  header: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
  params: {
    client_id: process.env.REACT_APP_UNSPLASH_KEY,
  },
});

export { accuweather, unsplash };
