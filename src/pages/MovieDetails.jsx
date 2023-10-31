import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import MovieCard from "../components/MovieCard/MovieCard";
import { Rating } from '@smastrom/react-rating'


// CSS imports
import './MovieDetails.css';
import '@smastrom/react-rating/style.css'
// import Navbar from "../components/Navbar/Navbar";


function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    async function downloadMovie(){
        const response = await axios.get(searchMovieById(id));
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
        const random = Math.random();
        if(random > 0.5) {
            throw "error";
        }
    }, [id]);
console.log(movie)
    return (
       
        <div className="movie-details-wrapper">
            {movie && <MovieCard 
                        Title={movie.Title} 
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster} 
                        id={movie.imdbID}
                        />
            }
            {movie && <div className="movie-details">
                <div className="plot-of-movie">
                    <h3 className="heading-detail">{movie.Title}</h3>{movie.Plot}
                </div>
                <h3 className="heading-detail">Details about movie</h3>
                <div className="details-movie">
                      <div className="individual-det">
                    <h2>Actors:</h2> 
                    <h3>{movie.Actors}</h3> 
                </div>
                <div className="individual-det">
                    <h2>Director:</h2> 
                    <h3>{movie.Director}</h3> 
                </div>
                <div className="individual-det">
                <h2>Origin:</h2> 
                    <h3>{movie.Country}</h3> 
                </div>
                <div className="individual-det">
                    <h2>Language:</h2> 
                    <h3>{movie.Language}</h3> 
                </div>
                <div className="individual-det">
                    <h2>Ratings Imdb:</h2> 
                    <h3>{movie.imdbRating}</h3> 
                </div>
                <div>
                    Genre: {movie.Genre.split(',').map((genre) => {
                        return <span className="genre" key={genre}>{genre}</span>
                    })}
                </div>
                </div>
              
                
              
                <div>
                    <Rating items={20} value={Math.floor(movie.imdbRating)} />
                </div>
            </div>
            
            }
        </div>
    )
}

export default MovieDetails;