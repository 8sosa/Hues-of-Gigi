import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState } from 'react';
import { Container, Dropdown, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RiMenu4Line, RiArrowGoBackFill } from "react-icons/ri";
import Logo from '../Images/logo.JPG';

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // Track current page in Offcanvas

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNftsClick = () => {
    setCurrentPage('nfts'); // Set current page to 'nfts' when clicking the Nfts link
  };
  const handleBackToMenu = () => {
    setCurrentPage('home');
  };

  const NFTOptions = () => {
    return (
      <>
          <div className='navLinks altMont'>
              <div className="menuHeader">Nfts</div>
              <Nav.Link as={NavLink} to="https://foundation.app" className="navLink justify-content-center" aria-label="Foundation">Foundation</Nav.Link>
              <Nav.Link as={NavLink} to="https://www.manifold.xyz" className="navLink justify-content-center" aria-label="Manifold">Manifold</Nav.Link>
          </div>
      </>
    );
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'nfts':
        return <NFTOptions />;
      case 'home':
      default:
        return (
          <div className='navLinks altMont'>
            <Nav.Link as={NavLink} to="/" className="navLink" aria-label="Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about-us" className="navLink" aria-label="About Us">About</Nav.Link>
            <Nav.Link as={NavLink} to="/Portfolio" className="navLink" aria-label="Portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/exhibitions" className="navLink" aria-label="Exhibitions">Exhibitions</Nav.Link>
            <Nav.Link as={NavLink} to="/art-prints" className="navLink" aria-label="Art Prints">Art Prints</Nav.Link>
            <Nav.Link onClick={handleNftsClick} className="navLink" aria-label="Nfts">Nfts</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="navLink" aria-label="contact me">Contact Me</Nav.Link>
          </div>
        );
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="hogNavbar" as="nav">
      <Container className='hogNavbarContainer'>
        <Navbar.Brand href="/"><img src={Logo} alt='Hues of Gigi' className='hogLogo' /></Navbar.Brand>
        <div className='navLinks altMont mobile'>
          <Nav.Link as={NavLink} to="/" className="navLink" aria-label="Home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about-us" className="navLink" aria-label="About Us">About</Nav.Link>
          <Nav.Link as={NavLink} to="/Portfolio" className="navLink" aria-label="Portfolio">Portfolio</Nav.Link>
          <Nav.Link as={NavLink} to="/exhibitions" className="navLink" aria-label="Exhibitions">Exhibitions</Nav.Link>
          <Nav.Link as={NavLink} to="/art-prints" className="navLink" aria-label="Art Prints">Art Prints</Nav.Link>
          <Dropdown show1={dropdownOpen} onToggle={handleDropdownToggle}>
            <Dropdown.Toggle className={dropdownOpen ? 'activeDropdown' : ''}>Nfts</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="https://foundation.app">Foundation</Dropdown.Item>
              <Dropdown.Item href="https://www.manifold.xyz">Manifold</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link as={NavLink} to="/contact" className="navLink" aria-label="contact me">Contact Me</Nav.Link>
        </div>
        <div onClick={handleShow} className='hogNavbarToggle'><RiMenu4Line /></div>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement='end' className="hogNavbarMenu">
        <Offcanvas.Header closeButton>
          {currentPage === 'nfts' && (
            <button onClick={handleBackToMenu} className="backBtn"><RiArrowGoBackFill /></button>
          )}
        </Offcanvas.Header>        <Offcanvas.Body className='d-flex flex-column align-items-center'>
          {renderContent()}
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}
