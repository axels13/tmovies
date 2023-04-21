const API_KEY = "aea64e8ec0c9007baa911724b0063886";
const API_URL = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query} `
  );
  const data = await response.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const response = await fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getTopRatedTV = async () => {
  const response = await fetch(`${API_URL}/tv/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchSeriesTV = async (query) => {
  const response = await fetch(
    `${API_URL}/search/tv?api_key=${API_KEY}&query=${query} `
  );
  const data = await response.json();
  return data.results;
};

export const getTrendingTV = async () => {
  const response = await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
// Details
export const getMovieDetails = async (id) => {
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const getTVDetails = async (id) => {
  const response = await fetch(`${API_URL}/tv/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

//actores
export const getMovieCast = async (movieId) => {
  const response = await fetch(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};
//videos
export const getMovieVideos = async (id) => {
  const response = await fetch(
    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );
  const data = await response.json();
  const videos = data.results.filter((video) => video.type === "Trailer");
  return videos;
};

//similar
export const getSimilarTV = async (id) => {
  const response = await fetch(
    `${API_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(
    `${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
};
