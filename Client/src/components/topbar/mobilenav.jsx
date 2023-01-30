import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
function BasicExample() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="mobnav">
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link className="link" to="/">
              BLOG
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="link" to="/">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="link" to="/about">
                  ABOUT
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="link" to="/gallery">
                  GALLERY
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="link" to="/contact">
                  CONTACT
                </Link>
              </Nav.Link>
              <NavDropdown title="USER" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {user && (
                    <li className="topListItem" onClick={handleLogout}>
                      LOGOUT
                    </li>
                  )}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
