import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function Navbarr({settext, setrate}) {
  const [nav, setnav] = useState (false);
  const changenav = () => {
    window.scrollY >= 80 ? setnav(true) : setnav(false);

  }
  window.addEventListener('scroll', changenav)  
return (
  <>
  <div className={nav ? 'navactive nav' : 'nav'}>
    <Navbar  expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#" className='title'>AMINFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='links'><Link style={{textDecoration:'none' , color:'white'}} to ="/">Movies</Link></Nav.Link>
            <Nav.Link href="#action2" className='links'><Link style={{textDecoration:'none' , color:'white'}} to ="/about">About</Link></Nav.Link>
            <Nav.Link href="#action2" className='links'><Link style={{textDecoration:'none' , color:'white'}} to ="contact">Contact</Link></Nav.Link>
          </Nav>
          <div className='starts'>
          <ReactStars count={5} size={24} activeColor="#ffd700" onChange={(newRating) => setrate(newRating)}/>,
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Whatever You Want"
              className="me-2 input"
              aria-label="Search"
              onChange={(e)=> settext(e.target.value)}/>
            <Button variant="outline-success" style={{border:'none'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
    </>
  )
}

export default Navbarr