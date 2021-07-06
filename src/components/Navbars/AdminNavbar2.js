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
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

function AdminNavbar({ history }) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-info");
  // const [collapseOpen, setCollapseOpen] = React.useState(false);

  //mis cosas
  const localAuthContext = useContext(AuthContext);
  const {  cerrarSesion } = localAuthContext;

  React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 399 ||
  //       document.body.scrollTop > 399
  //     ) {
  //       setNavbarColor("");
  //     } else if (
  //       document.documentElement.scrollTop < 400 ||
  //       document.body.scrollTop < 400
  //     ) {
  //       setNavbarColor("navbar-info");
  //     }
  //   };
  //   window.addEventListener("scroll", updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  });
  return (
    <>
      {/* {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null} */}
      <Navbar color="info" expand="lg">
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
                // setCollapseOpen(!collapseOpen);
              }}
              // aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            // isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Acciones</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/dashboard-page" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Dashboard
                  </DropdownItem>
                  <DropdownItem
                    href="http://nuxeo.controltotal.com.pe/nuxeo/login.jsp"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Nuxeo - Documentation
                  </DropdownItem>
                  <DropdownItem to="/admin-page" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Admin-page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
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
