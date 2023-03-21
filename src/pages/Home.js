import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrending } from 'api/api';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movies = await getTrending(signal);
        setMovies(movies.results);
      } catch (error) {
        if (error.name === 'CanceledError') return;
        toast.error('Oops, something went wrong');
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
