import './header.css';

import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <nav>
  <header>
    <img
      className="logo"
      src="https://static.vecteezy.com/system/resources/previews/025/313/510/original/coconut-cocktail-with-pink-flowers-and-straw-coconut-drink-in-cartoon-style-illustration-isolated-on-transparent-background-png.png"
      alt="logo"
    />
    <ul className="nav_links">
      <li>
        <Link to="/cocktails">Coctails</Link>
      </li>
      <li>
        <Link to="/create/cocktail">Create</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <Link className="btn1-header" to="/login">
      <button>Login</button>
    </Link>
   
    <Link className="btn2-header" to="/register">
      <button>Register</button>
    </Link> 
    
    <Link className="btn1-header" to="/logout">
      <button>Logout</button>
    </Link>
  </header>
</nav>
    );
}

