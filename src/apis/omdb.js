export function searchMovie(term,page) {
    return `https://www.omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&s=${term}&page=${page}`;
}

export function searchMovieById(imdbId) {
    return `https://www.omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&i=${imdbId}`;
}