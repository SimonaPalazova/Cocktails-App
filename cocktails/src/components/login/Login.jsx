import './login.css'

import useForm from '../../hooks/useForm'; 

import {Link} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/authConext';

export default function Login() {
    const {loginSubmithandler } = useContext(AuthContext); 
    const {values, onChange, onSubmit} = useForm(loginSubmithandler,{
        email: '',
        password: '',
    });
    return(
        <div className="container-login">
  <form className="form-login" onSubmit={onSubmit}>
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
        onChange={onChange}
        value={values.email}
      />
      <span> </span>
    </div>
    <div className="input-container-login">
      <input
        className="input-pwd-login"
        name='password'
        type="password"
        placeholder="Enter password"
        onChange={onChange}
        value={values.password}
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