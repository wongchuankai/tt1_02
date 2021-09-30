import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topnavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Topnavbar;

