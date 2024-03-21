import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Poster from './components/Poster';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        {/* <About /> */}
        {/* <Menu /> */}
        {/* <Contact /> */}
        {/* <Poster /> */}
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
