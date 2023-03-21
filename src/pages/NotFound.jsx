import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page</p>
      <Link to="/">Bach to Homepage</Link>
    </main>
  );
};

export default NotFound;
