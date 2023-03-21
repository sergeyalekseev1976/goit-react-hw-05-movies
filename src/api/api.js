import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';
axios.defaults.params = { api_key: '687f60735406ee0172c31461de2476ff' };

export const getTrending = async signal => {
  const response = await axios.get(`/trending/movie/day`, {
    signal,
  });
  return response.data;
};

export const searchMovie = async (query, signal) => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    signal,
  });
  return response.data;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal,
  });
  return response.data;
};

export const getMovieCredits = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    signal,
  });
  return response.data;
};

export const getMovieReviews = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    signal,
  });
  return response.data;
};
