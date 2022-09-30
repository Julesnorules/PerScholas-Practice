import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav className="nav">
      <Link to="/womans">
        <div>Woman's</div>
      </Link>
      <Link to="/mans">
        <div>Man's</div>
      </Link>
      <Link to="/onthestreet">
        <div>On The Street</div>
      </Link>
      <Link to="/thecatwalk">
        <div>The Catwalk</div>
      </Link>
      <Link to="/adwatch">
        <div>AdWatch</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </nav>
  )
}