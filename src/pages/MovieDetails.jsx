import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BackLink } from 'components/BackLink/BackLink';
import toast, { Toaster } from 'react-hot-toast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId, signal);
        setMovie(movieDetails);
      } catch (error) {
        if (error.name === 'CanceledError') return;
        toast.error('Oops, something went wrong');
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <BackLink to={ref.current}>Go Back</BackLink>
      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
