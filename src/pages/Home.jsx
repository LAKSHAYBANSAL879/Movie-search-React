
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMovieList from '../hooks/useMovieList';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('Transformers');
  const [currentPage, setCurrentPage] = useState(1);
  const { movieList, totalResults,search } = useMovieList(searchTerm, currentPage);
  const navigator = useNavigate();

  useEffect(() => {
    // Update the search results when the searchTerm or currentPage changes
    search(searchTerm, currentPage);
  }, [searchTerm, currentPage]);

  function handleAutoCompleteClick(movieImdbId) {
    navigator(`/movie/${movieImdbId}`);
  }

  function handlePaginationClick(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <>
      <div className="search-bar">
        <input
          id="movie-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What movie are you thinking about..."
        />
      </div>
      <div className="movie-card-wrapper">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <div
              onClick={() => handleAutoCompleteClick(movie.imdbID)}
              key={movie.imdbID}
              className="autocomplete-result"
            >
                <img src={movie.Poster} alt="poster-movie" />
              <h2>{movie.Title}({movie.Type})</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
      </div>
      {totalResults > 0 && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(totalResults / 10) }, (_, index) => (
            <button key={index + 1} onClick={() => handlePaginationClick(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
