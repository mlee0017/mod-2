import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="nav">
          <Link to="/" style={{ textDecoration: 'none', textTransform: 'uppercase', color: 'darkgreen' }}>
            <h1>Home</h1>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', textTransform: 'uppercase', color: 'darkgreen' }}>
            <h1>About</h1>
          </Link>
          <Link to="/gameitems" style={{ textDecoration: 'none', textTransform: 'uppercase', color: 'darkgreen' }}>
            <h1>Game Items</h1>
          </Link>
        </div>
    )
}

export default Nav; 