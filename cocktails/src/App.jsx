import { Routes, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/home/Home';
import Cocktails from './components/cocktails-list/Cocktails';

function App() {
  
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cocktails" element={<Cocktails />}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App
