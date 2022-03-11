const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Treding",
    url: `/trending/all/day?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/search/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/search/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/search/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `search/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/search/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/search/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/search/movie?api_key=${API_KEY}&with_genres=37`,
  },
};
