import { Routes, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/home/Home';
import Cocktails from './components/cocktails-list/Cocktails';
import CreateCocktail from './components/create-cocktail/CreateCocktails';
import OneCocktail from './components/one-cocktail/OneCocktail';

function App() {
  
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cocktails" element={<Cocktails />}/>
      <Route path="/create/cocktail" element={<CreateCocktail />}/>
      <Route path="/details" element={<OneCocktail />}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App
