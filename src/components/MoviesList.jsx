import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './Movie';

export default function MoviesList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=cecb8ae8236231beeb7c24539049cb70&language=en-US&page=1"
      );
  
      const movies = await data.json();
      setMovies(movies.results);
    }
  
    fetchMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  )
}
