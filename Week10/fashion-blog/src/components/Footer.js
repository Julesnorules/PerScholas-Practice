import { Link } from 'react-router-dom';

export default function Footer (props) {
    return (
    <nav className="bottomnav" aria-label="Footer Navigation" role="navigation">
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="/womens">
            <div>Women's</div>
        </Link>
        <Link to="/mens">
            <div>Men's</div>
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
        <Link to="/tips">
            <div>Tips</div>
        </Link>
        <p>&copy; 2013 Valet Industries, Inc</p>
    </nav>
    )
}