import { Routes, Route} from 'react-router-dom';

import AuthContext from './contexts/authConext';


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
  return (
    <AuthContext.Provider>
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
