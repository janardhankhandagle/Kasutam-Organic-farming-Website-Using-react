import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logoof from './logoof.png'
import { FaRegUser } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";

import NavDropdown from 'react-bootstrap/NavDropdown';
import Cold from '../Component/NavComponent/Productss/Cold';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  
  

  return (
    <>
     <div className='text-center free'><h5> Free shipping above 500/-</h5></div>
    <nav className={`navbar ${isActive ? 'active' : ''}`} >
      
      
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className='pt-4'><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/Product" > </NavLink> <NavDropdown
              id="nav-dropdown-dark-example"
              title="our product"
              href="/Product"
            >
               <NavDropdown.Item href="/Product">All Product</NavDropdown.Item>
               <NavDropdown.Item href="/CowGhee">
                A2 desi cow ghee
                </NavDropdown.Item>
                   <NavDropdown.Item  href="/Buffalow">Buffalow biliona ghee</NavDropdown.Item>
                <NavDropdown.Item  href="/Cold" >
                cold pressed oil
              </NavDropdown.Item>
            </NavDropdown>
       </li>
        <li className='pt-4'><NavLink to="/About">Our Story</NavLink></li>
        <li className='pt-4'><NavLink to="/Contact">Contact</NavLink></li>
        <li className='pt-4'><NavLink to="/Track">Track Order</NavLink></li>
      </ul>
       <NavLink to="/"> <h1 className="logo"><img id='of' src={logoof} alt="" /></h1></NavLink>
      <div className="search-container ">
        <input className='sir' type="text" placeholder="Search products" />
        <NavLink to='/User' > <h3 id='far'><FaRegUser /></h3></NavLink> 
      
        <NavLink to="/Cart">   <h3 id='tfi'><TfiShoppingCartFull /></h3></NavLink> 
      </div>
     
      <div className="nav-toggle" onClick={toggleMenu}>
      
        {isActive ? <IoClose /> : <IoMenu />}
        
        
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
