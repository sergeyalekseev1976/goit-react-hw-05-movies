import { Wrapper, Thumb, InfoWrapper, Link, Score } from './MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({
  movie: {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  },
}) => (
  <Wrapper>
    <Thumb>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://via.placeholder.com/400x550.png?text=${original_title}`
        }
        alt={original_title}
      />
    </Thumb>
    <InfoWrapper>
      <h2>
        {original_title} ({release_date.slice(0, 4)})
      </h2>
      <p>
        User Score: <Score>{(vote_average * 10).toFixed()}%</Score>
      </p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(gener => `${gener.name}, `)}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </InfoWrapper>
  </Wrapper>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string,
  }),
};
