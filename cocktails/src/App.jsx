import { Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService'
import AuthContext from './contexts/authConext';
import Path from './paths';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Cocktails from './components/cocktails-list/Cocktails';
import CreateCocktail from './components/create-cocktail/CreateCocktail';
import OneCocktail from './components/one-cocktail/OneCocktail';
import EditCoctail from './components/edit-cocktail/EditCoctail';
import Profile from './components/profile/profile';
import EditProfile from './components/edit-profile/EditProfile';
import Register from './components/register/Register';
import Login from './components/login/Login';


function App() {
  const navigate = useNavigate()
  const [auth, setAuth]= useState({});
  
 

  const loginSubmithandler = async (values) =>{
    const result = await authService.login(values.email, values.password)
    setAuth(result)
    
    navigate(Path.Cocktails)
  }

  const values = {
    loginSubmithandler,
    registerSubmithandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  };

   const registerSubmithandler = async (values) =>{
    const result = await authService.register(values.username, values.email, values.password, values.rePassword)
    setAuth(result)
    
    navigate(Path.Cocktails)
  }
  return (
    <AuthContext.Provider value={values}>
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cocktails" element={<Cocktails />}/>
      <Route path="/create/cocktail" element={<CreateCocktail />}/>
      <Route path="/details" element={<OneCocktail />}/>
      <Route path="/edit/cocktail" element={<EditCoctail />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/edit/profile" element={<EditProfile />}/>
    </Routes>
    <Footer />
  </div>
  </AuthContext.Provider>
  )
}

export default App
