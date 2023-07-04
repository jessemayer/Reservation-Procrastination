
//import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.jpg'
import '../Styles/navBar.css'


import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
     {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className=" navbar-spacing">
          <Container fluid>
            <Navbar.Brand href='/'>
            <img 
              src={logo}
              height="90"
              className="d-inline-block me-auto align-top logo"
              alt="logo"/>
            </Navbar.Brand>
            <Navbar.Brand>Reservation Procrastination</Navbar.Brand>  
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Reservation Procrastination
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href='/campSites'>Camp Sites</Nav.Link>
                    <Nav.Link href="/fireLookout">Fire Lookout</Nav.Link>
                    <Nav.Link href="/permits">Permits</Nav.Link>
                    <Nav.Link href="/Tours">Tours</Nav.Link>
                    <Nav.Link href="/lotteries">Lotteries</Nav.Link>               
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
    </>
  );
}

export default NavBar;