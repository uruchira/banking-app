import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaRegFutbol } from "react-icons/fa";

const Header = () => {
  const balance = useSelector((state) => state.transactions.accountBalance);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Banking App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link me-4">
                <FaHome />
                <span className="ms-2">Home</span>
              </NavLink>
              <NavLink to="/goals" className="nav-link">
                <FaRegFutbol />
                <span className="ms-2">Goals</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto">
            <Navbar.Text>
              Balance: <span className="text-white">{`${balance} $`} </span>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
