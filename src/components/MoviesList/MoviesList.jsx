import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Thumb } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Thumb>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://via.placeholder.com/300x450.png?text=${title}`
                }
                alt={title}
              />
            </Thumb>
          </Link>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
