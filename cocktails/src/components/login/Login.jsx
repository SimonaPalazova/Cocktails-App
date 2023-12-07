import './login.css'

import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <div className="container-login">
  <form className="form-login" method="post">
    <div className="form-title-login">
      <span>Login to your</span>
    </div>
    <div className="title-2-login">
      <span>Profile</span>
    </div>
    <div className="input-container-login">
      <input
        className="input-mail-login"
        name='email'
        type="email"
        placeholder="Enter email"
      />
      <span> </span>
    </div>
    <div className="input-container-login">
      <input
        className="input-pwd-login"
        name='password'
        type="password"
        placeholder="Enter password"
      />
    </div>
    <button type="submit-login" className="submit">
      <span className="sign-text">Login</span>
    </button>
    <p className="signup-link-login">
      No account?
      <Link to="/register" className="up-login">
        Register
      </Link>
    </p>
  </form>
</div>

    );
}