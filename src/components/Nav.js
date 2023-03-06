import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="nav">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/objects">
            <h1>Objects</h1>
          </Link>
          
          
        
        </div>
    )
}

export default Nav; 