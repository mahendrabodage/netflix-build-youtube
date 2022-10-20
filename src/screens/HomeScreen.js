import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  const [movie, setMovie] = useState(null);

  const setNewMovie = (selectedMovie) => {
    setMovie(selectedMovie);
    console.log("==============================",selectedMovie);
  }

  useEffect(() => { 
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    console.log('New Movie ', movie);
    if(!movie) {
       fetchData();
    } else {
      setMovie(movie);
    }
  }, []);

  return (
    <div className="homeScreen">
      <Nav />

      <Banner movie={movie}/>

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow setNewMovie={setNewMovie}/>
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        setNewMovie={setNewMovie}
      />
      <Row
        title='Documentries'
        fetchUrl={requests.fetchDocumentaries}
        setNewMovie={setNewMovie}
      />
    </div>
  )
}

export default HomeScreen