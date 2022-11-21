import MovieRepository from "~/repositories/movie/MovieRepository";

export default ($axios) => ({
  movieRepo: MovieRepository($axios)
})
