import { Button, Image, NavLink, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import logo from "../assets/favicon.png";
import profil from "../assets/profil.jpg";

function Navigation() {
  return (
    <>
    {/* Navigation Start */}
    {['sm'].map((expand) => (
      <Navbar key={expand} bg="danger" variant='dark' expand={expand} className="mb-3 fixed-top">
        <Container fluid>
          {/* Navbar Brand */}
          <Navbar.Brand>
            {/* Navbar Link */}
            <Nav.Link href='/'>
            <img
              src={logo}
              width="30"
              height="30"
              className="rounded-circle d-inline-block align-top"
              alt="alcoconut logo"
            /> &#931;-Xpress
            </Nav.Link>
            {/* End Navbar Link */}
          </Navbar.Brand>
          {/* End Navbar Brand */}


          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            {/* Toggle Header */}
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            {/* End Toggle Header */}

            {/* Toogle Body */}
            <Offcanvas.Body>
              {/* Text menu */}
              <Nav className="justify-content-start align-items-center flex-grow-1 pe-1">
                {/* Link Home and Shop */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/cargo">Cargo</Nav.Link>
                <Nav.Link href="/shipment">Shipment</Nav.Link>
                {/* End Link Home and Shop */}
              </Nav>
              {/* End Text Menu */}

              {/* Menu Icon */}
              <Nav className="flex-sm-row flex-md-row flex-lg-row flex-column align-items-center justify-content-center">
                {/* Link Trolly */}
                <NavLink className="nav-link my-auto" href="/troll">
                  <Button variant="danger">
                    <div className='d-flex align-items-start'>
                      <i className="fas fa-shopping-cart"></i>
                        <div className='notif d-flex align-items-center justify-content-center ml-n2 mt-n2'>1</div>
                    </div>
                  </Button>
                </NavLink>
                {/* End Link Trolly */}

                {/* Link Notif */}
                <NavLink className="nav-link my-auto" href="/notif">
                  <Button variant="danger">
                    <div className='d-flex align-items-start'>
                      <i className="fas fa-bell"></i>
                        <div className='notif d-flex align-items-center justify-content-center ml-n2 mt-n2'>3</div>
                    </div>
                  </Button>
                </NavLink>
                {/* End Link Notif */}

                {/* Link Profil Dropdown */}
                <div className='d-flex flex-row justify-content-center align-items-center mx-2 my-auto'>
                  <Image src={profil} width="30" height="30" alt="profile" className="rounded-circle" />
                  <NavDropdown>
                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/order">My Order</NavDropdown.Item>
                    <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
                    <NavDropdown.Item href="/secure">Secure</NavDropdown.Item>
                    <NavDropdown.Item href="/help">Help</NavDropdown.Item>
                    <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </div>
                {/* End Link Profil Dropdown */}
              </Nav>
              {/* End Menu Icon */}

            </Offcanvas.Body>
            {/* End Toggle Body */}
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    {/* Navigation End  */}
  </>
  );
}

export default Navigation;