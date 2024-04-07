
import './App.css';
import Navbar from './Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Component/NavComponent/Logo'
import Cart from './Component/NavComponent/Cart';
import Contact from './Component/NavComponent/Contact';
import Track from './Component/NavComponent/Track';
import User from './Component/NavComponent/User';
import About from './Component/NavComponent/About';
import Product from './Component/NavComponent/Product';
import Home from './Component/NavComponent/Home';
import { Route, Routes } from 'react-router-dom';

import Buffalow from './Component/NavComponent/Productss/Buffalow';
import Cold from './Component/NavComponent/Productss/Cold';
import CowGhee from './Component/NavComponent/Productss/CowGhee';
import whats from '../src/Component/NavComponent/Images/whats.png'

function App() {
  return (
    <><Navbar />
    
    <a href=""><img className='png' src={whats} alt="" /></a>

      
      <Routes>

        < Route path='/' element={<Home />} />
        < Route path='/Product' element={<Product />} />
        < Route path='/About' element={<About />} />
        < Route path='/Logo' element={<Logo />} />
        < Route path='/Contact' element={<Contact />} />
        < Route path='/Track' element={<Track />} />
        < Route path='/Cart' element={<Cart />} />
        < Route path='/User' element={<User />} />
        < Route path='/Cold' element={<Cold />} />
        < Route path='/Buffalow' element={<Buffalow />} />
        < Route path='/CowGhee' element={<CowGhee />} />
        
      </Routes>

    </>
  );
}

export default App;
