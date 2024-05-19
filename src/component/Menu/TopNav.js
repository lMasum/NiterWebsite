/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';
import niter_logo from "../front/image/niter_logo.png";

function TopNav() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={niter_logo} className="d-block mx-auto p-2 w-50" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 mx-auto h6">
                  {/* <Nav.Link href="#">Home</Nav.Link>
                  
                  <Nav.Link href="#">About</Nav.Link> */}
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to ='/faculties'>Faculty</Link>
                  <Link to ='/teacher'>Teacher</Link>
                  
                 















                  <Outlet/>
{/*                   
                  <Nav.Link href="#">Faculty</Nav.Link>
                  
                  <Nav.Link href="#">Departments</Nav.Link>
                  
                  <Nav.Link href="#">Clubs</Nav.Link>
                  
                  <Nav.Link href="#">Notice</Nav.Link>
                  
                  <Nav.Link href="#">Admission</Nav.Link>
                  
                  <Nav.Link href="#">Office</Nav.Link>

                  <Nav.Link href="#">Residents</Nav.Link>

                  <Nav.Link href="#">Career</Nav.Link>

                  <Nav.Link href="#">Campus Life</Nav.Link>

                  <Nav.Link href="#">Contact US</Nav.Link> */}

                  {/* <NavDropdown
                    title="About"
                    id={`offcanvasNavbarDropdown_1-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">
                        Message From The Honorable Chairman
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        The Governing Body
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Vision,Mission and Gaols
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Overview
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNav;