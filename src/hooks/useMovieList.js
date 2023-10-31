// import axios from "axios";
// import { useEffect, useState } from "react";
// import { searchMovie } from "../apis/omdb";
// // import { url } from "inspector";

// function useMovieList(...args) {
//     const [movieList, setMovieList] = useState([]);

//     async function downloadDefaultMovies(...args) {
//         try {
            
            
//             const url =searchMovie(...args)
//             const response = await axios.get(url);
//             console.log(response.data)
//             if(response.data.Error) {
//                 setMovieList([]);
//             } else {
//                 setMovieList(response.data.Search || []);
//             }
        
//         } catch(error) {
//             console.log("api request failed")
//         }
    
//     }

//     useEffect(() => {
//         downloadDefaultMovies(...args);
//     }, [...args]);
//     const search = async (searchTerm) => {
//         try {
//             const url = searchMovie(searchTerm);
//             const response = await axios.get(url);
//             if (response.data.Error) {
//                 setMovieList([]);
//             } else {
//                 setMovieList(response.data.Search || []);
//             }
//         } catch (error) {
//             console.error("API request failed", error);
//         }
//     };
//     return {movieList,search};
// }
// export default useMovieList;
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { searchMovie } from '../apis/omdb';

// function useMovieList(searchTerm, page) {
//   const [movieList, setMovieList] = useState([]);
//   const [totalResults, setTotalResults] = useState(0); // Define totalResults state

//   async function downloadMovies(searchTerm, page) {
//     try {
//       const url = searchMovie(searchTerm, page); // Pass the search term and page to the URL
//       const response = await axios.get(url);

//       if (response.data.Error) {
//         setMovieList([]);
//       } else {
//         setMovieList(response.data.Search || []);
//         setTotalResults(parseInt(response.data.totalResults, 10)); // Set totalResults
//       }
//     } catch (error) {
//       console.error('API request failed', error);
//     }
//   }

//   useEffect(() => {
//     downloadMovies(searchTerm, page);
//   }, [searchTerm, page]);

//   return { movieList, totalResults }; // Include totalResults in the return statement
// }

// export default useMovieList;
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { searchMovie } from '../apis/omdb';

// function useMovieList(searchTerm, page) {
//   const [movieList, setMovieList] = useState([]);
//   const [totalResults, setTotalResults] = useState(0);

//   async function downloadMovies(searchTerm, page) {
//     try {
//       const url = searchMovie(searchTerm, page); // Pass the search term and page to the URL
//       const response = await axios.get(url);

//       if (response.data.Error) {
//         setMovieList([]);
//       } else {
//         setMovieList(response.data.Search || []);
//         setTotalResults(parseInt(response.data.totalResults, 10));
//       }
//     } catch (error) {
//       console.error('API request failed', error);
//     }
//   }

//   useEffect(() => {
//     downloadMovies(searchTerm, page);
//   }, [searchTerm, page]);

//   const search = async (newSearchTerm, newPage) => {
//     setSearchTerm(newSearchTerm); // Update the search term
//     setCurrentPage(newPage); // Update the current page
//   };

//   return { movieList, totalResults, search }; // Include the search function in the return statement
// }

// export default useMovieList;
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { searchMovie } from '../apis/omdb';

// function useMovieList(searchTerm, page) {
//   const [movieList, setMovieList] = useState([]);
//   const [totalResults, setTotalResults] = useState(0);

//   async function downloadMovies(searchTerm, page) {
//     try {
//       const url = searchMovie(searchTerm, page); // Pass the search term and page to the URL
//       const response = await axios.get(url);

//       if (response.data.Error) {
//         setMovieList([]);
//       } else {
//         setMovieList(response.data.Search || []);
//         setTotalResults(parseInt(response.data.totalResults, 10));
//       }
//     } catch (error) {
//       console.error('API request failed', error);
//     }
//   }

//   useEffect(() => {
//     downloadMovies(searchTerm, page);
//   }, [searchTerm, page]);

//   const search = async (newSearchTerm, newPage) => {
//     // Trigger a new API request
//     downloadMovies(newSearchTerm, newPage);
//   };

//   return { movieList, totalResults, search };
// }

// export default useMovieList;
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { searchMovie } from '../apis/omdb';

// function useMovieList(searchTerm, page) {
//   const [movieList, setMovieList] = useState([]);
//   const [totalResults, setTotalResults] = useState(0);

//   async function downloadMovies(searchTerm, page) {
//     try {
//       const url = searchMovie(searchTerm, page); // Pass the search term and page to the URL
//       const response = await axios.get(url);
//       console.log(url);
// console.log(response);
//       if (response.data.Error) {
//         setMovieList([]);
//       } else {
//         setMovieList(response.data.Search || []);
//         setTotalResults(parseInt(response.data.totalResults, 10));
//       }
//     } catch (error) {
//       console.error('API request failed', error);
//     }
//   }

//   useEffect(() => {
//     downloadMovies(searchTerm, page);
//   }, [searchTerm, page]);

//   return { movieList, totalResults };
// }

// export default useMovieList;
import axios from 'axios';
import { useEffect, useState } from 'react';
import { searchMovie } from '../apis/omdb';

function useMovieList(searchTerm, page) {
  const [movieList, setMovieList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  async function downloadMovies(searchTerm, page) {
    try {
      const url = searchMovie(searchTerm, page); // Pass the search term and page to the URL
      const response = await axios.get(url);
console.log(response);
      if (response.data.Error) {
        setMovieList([]);
      } else {
        setMovieList(response.data.Search || []);
        setTotalResults(parseInt(response.data.totalResults, 10));
      }
    } catch (error) {
      console.error('API request failed', error);
    }
  }

  useEffect(() => {
    downloadMovies(searchTerm, page);
  }, [searchTerm, page]);

  return { movieList, totalResults, search: downloadMovies }; // Include the search function
}

export default useMovieList;
