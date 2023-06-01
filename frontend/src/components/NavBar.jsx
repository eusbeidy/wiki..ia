import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Home } from './Home';

export const NavBar = () => {
  return (
    <BrowserRouter>
     <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className='container-fluid'  collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/Inscribir">Inscribirse</Link>
            <Link className="nav-link" to="/Nosotros">Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  )
}
