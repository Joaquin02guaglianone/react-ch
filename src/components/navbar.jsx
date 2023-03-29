import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from './carrito';


export function Navb() {
  return(
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">inicio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Prendas Superiores</Nav.Link>
        <Nav.Link href="#features">Prendas Inferiores</Nav.Link>
        <Nav.Link href="#pricing">Calzados</Nav.Link>
        <Nav.Link href="#pricing">Accesorios</Nav.Link>
        <Cart/>
      </Nav>
    </Container>
  </Navbar>
  )
}