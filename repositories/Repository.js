import MovieRepository from "@/repositories/movie/MovieRepository";

export default ($axios) => ({
  movie: MovieRepository($axios)
})
