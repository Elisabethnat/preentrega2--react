import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Total-Fashion</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Hombre</Nav.Link>
          <Nav.Link href="#features">Mujer</Nav.Link>
          <Nav.Link href="#pricing">Niños</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};

export default NavBar;
