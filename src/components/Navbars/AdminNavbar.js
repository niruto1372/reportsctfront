import AuthContext from "context/auth/authContext";
import React, { useContext } from "react";
import { Link,  withRouter } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function AdminNavbar({ history }) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  //mis cosas
  const localAuthContext = useContext(AuthContext);
  const {  cerrarSesion } = localAuthContext;

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          
          <div className="navbar-translate">
            <NavbarBrand
              href="http://controltotal.com.pe"
              target="_blank"
              id="navbar-brand"
            >
              Control Total S.A.C.
            </NavbarBrand>
           
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  Acciones
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/index">¿Necesitas ayuda?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => {
                    cerrarSesion();
                    history.replace("/login-page");
                  }}>Cerrar Sesión</NavLink>
              </NavItem>
             
              
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/company/control-total-sac"
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">Linked in</p>
                </NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://es-la.facebook.com/controltotalSAC/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(AdminNavbar);
