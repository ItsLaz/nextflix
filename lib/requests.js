const TMDB_API_KEY = process.env.TMDB_API;

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=en-US`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=en-US`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=en-US`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=en-US`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=en-US`,
};

export default requests;
