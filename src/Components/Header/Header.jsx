import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo.png';
import logo_h from '../../Assets/logo_h.png';
import { FiSearch } from "react-icons/fi";
import './Header.css';
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <Navbar fixed="top" className="nav_main" collapseOnSelect expand="lg" bg="" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'> <img src={logo_h} className='header_logo' alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
            {/* <div class="nav-widget-form"><form class="search-form"><input type="search" class="form-control" placeholder="Search items, Creators "/><button className='pink' type="submit"><FiSearch /></button></form></div> */}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nev text-white"><Link to='/'  className="nev text-white"> Home</Link></Nav.Link>
            <Nav.Link className="nev text-white" ><Link to='/market_place'  className="nev text-white"> Marketplace </Link></Nav.Link>
            <Nav.Link className="nev text-white" > <Link to='/collection'  className="nev text-white">Collections</Link></Nav.Link>
           <Button className="creat_btn nev text-white"> <Nav.Link className="text-white" href="#deets"><Link to='/Create_pro' className=" nev text-white">Create </Link></Nav.Link> </Button>
           <Button className="connect_btn nev "> <Nav.Link className="text-white" href="#deets"><Link to='/create' className="text-white asa"> Connect Wallet </Link></Nav.Link> </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header