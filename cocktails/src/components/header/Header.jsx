import './header.css';
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
        <a href="#">Coctails</a>
      </li>
      <li>
        <a href="#">Create</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
    </ul>
    <a className="btn1" href="#">
      <button>Login</button>
    </a>
    <a className="btn1" href="#">
      <button>Logout</button>
    </a>
    <a className="btn2" href="#">
      <button>Register</button>
    </a>
  </header>
</nav>
    );
}

