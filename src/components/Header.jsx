import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <Navbar className="navbar-dark  bg-secondary" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link
            className="fs-1 text-decoration-none text-light fw-bold"
            to={"/"}
          >
            LOGO
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link
              className="text-decoration-none text-light align-items-center"
              to={"/cart"}
            >
              <FaShoppingCart className="fs-4" /> Sepet{" "}
              <Badge className="bg-black">{cartTotalQuantity}</Badge>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
