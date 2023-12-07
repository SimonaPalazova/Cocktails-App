
import './register.css'

import {Link} from 'react-router-dom';

export default function Register(){
    return(
        <div className="container-register">
  <form className="form-register" method="post">
    <div className="form-title-register">
      <span>Register to our</span>
    </div>
    <div className="title-2-register">
      <span>Community</span>
    </div>
    <div className="input-container-register">
      <input
        className="input-username-register"
        name='username'
        type="username"
        placeholder="Enter username"
      />
    </div>
    <div className="input-container-register">
      <input
        className="input-mail-register"
        name='email'
        type="email"
        placeholder="Enter email"
      />
      <span> </span>
    </div>
    <div className="input-container-register">
      <input
        className="input-pwd-register"
        name='password'
        type="password"
        placeholder="Enter password"
      />
    </div>
    <div className="input-container-register">
      <input
        className="input-re-pwd-register"
        name='re=password'
        type="re-password"
        placeholder="Repeat password"
      />
    </div>
    <button type="submit-register" className="submit">
      <span className="sign-text">Register</span>
    </button>
    <p className="signup-link-register">
      Have accaunt?
      <Link to="/login" className="up-register">
        Login
      </Link>
    </p>
  </form>
</div>

    );
}