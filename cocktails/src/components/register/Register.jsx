
import { useContext } from 'react';
import './register.css'

import {Link} from 'react-router-dom';
import AuthContext from '../../contexts/authConext';
import useForm from '../../hooks/useForm';

const RegisterFormKeys = {
  Username:'username',
  Email:'email',
  Password:'password',
  RePassword:'re-password',
}

export default function Register(){
  const {registerSubmithandler} = useContext(AuthContext)
  const {values, onChange, onSubmit} = useForm(registerSubmithandler, {
    [RegisterFormKeys.Username]: '',
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RePassword]: '',
  })
    return(
        <div className="container-register">
  <form className="form-register" onSubmit={onSubmit}>
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
        onChange={onChange}
        values={values[RegisterFormKeys.Username]}
      />
    </div>
    <div className="input-container-register">
      <input
        className="input-mail-register"
        name='email'
        type="email"
        placeholder="Enter email"
        onChange={onChange}
        values={values[RegisterFormKeys.Email]}
      />
      <span> </span>
    </div>
    <div className="input-container-register">
      <input
        className="input-pwd-register"
        name='password'
        type="password"
        placeholder="Enter password"
        onChange={onChange}
        values={values[RegisterFormKeys.Password]}
      />
    </div>
    <div className="input-container-register">
      <input
        className="input-re-pwd-register"
        name='re-password'
        type="re-password"
        placeholder="Repeat password"
        onChange={onChange}
        values={values[RegisterFormKeys.RePassword]}
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