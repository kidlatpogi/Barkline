import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/logo.png';

function ColorSchemesExample() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar 
        expand="md" 
        style={{ backgroundColor: '#FFFFFF' }} 
        data-bs-theme="light"
        sticky="top"
      >
        <Container>
          {/* Logo: responsive and sized */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Barkline Logo"
              style={{
                height: '50px',
                width: 'auto',
                maxWidth: '120px',
                objectFit: 'contain'
              }}
              className="img-fluid"
            />
          </Navbar.Brand>
          
          {/* Toggle at the right on mobile */}
          <div className="d-flex align-items-center ms-auto d-md-none">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          {/* Desktop: Nav links left, buttons right */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            {/* Buttons right on desktop, stacked below nav links on mobile */}
            <div className="d-flex gap-2 ms-md-auto mt-3 mt-md-0 flex-column flex-md-row">
              <Button
                variant="light"
                style={{ border: '2px solid black', fontWeight: 'bold' }}
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                variant="dark"
                style={{ fontWeight: 'bold' }}
                onClick={() => navigate('/create-account')}
              >
                Signup
              </Button>
            </div>
          </Navbar.Collapse>
          
          {/* Hide toggle on desktop, show on mobile */}
          <div className="d-none d-md-flex align-items-center ms-auto">
            {/* Empty for alignment */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;