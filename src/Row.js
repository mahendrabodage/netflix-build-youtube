import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from 'axios';

function Row({ title, fetchUrl, isLargeRow = false, setNewMovie }) {
  const [movies, setMovies] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  //console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
           (!isLargeRow && movie.backdrop_path)) && (
            <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} alt={movie.name} 
              onClick={() => setNewMovie(movie)}/>
          )
        ))}
      </div>
    </div>
  )
}

export default Row