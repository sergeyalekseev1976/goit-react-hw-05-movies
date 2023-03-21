import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/api';
import { List, Item, Thumb, Wrapper, Title, SubTitle } from './Cast.styled';
import toast, { Toaster } from 'react-hot-toast';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const credits = await getMovieCredits(movieId, signal);
        setCast(credits.cast);
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

  return cast?.length > 0 ? (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <List>
        {cast.map(({ cast_id, name, character, profile_path }) => (
          <Item key={cast_id}>
            <Thumb>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://via.placeholder.com/150x150.png?text=No+photo`
                }
                alt={name}
              />
            </Thumb>
            <Wrapper>
              <Title>{name}</Title>
              <SubTitle>{character}</SubTitle>
            </Wrapper>
          </Item>
        ))}
      </List>
    </>
  ) : (
    <p>We don`t have cast for this movie</p>
  );
};

export default Cast;
