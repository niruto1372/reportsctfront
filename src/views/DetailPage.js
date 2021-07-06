import DefaultFooter from 'components/Footers/DefaultFooter'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import AdminNavbar2 from 'components/Navbars/AdminNavbar2'
import React from 'react'


// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  Nav,

} from "reactstrap";

const DetailPage = () => {
  return (
    <>
      <AdminNavbar2 />
      <div className="wrapper">
        {/* <Navbar className="bg-primary" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Primary color
              </NavbarBrand>
              <button
                // onClick={() => {
                //   document.documentElement.classList.toggle("nav-open");
                //   setCollapseOpen(!collapseOpen);
                // }}
                // aria-expanded={collapseOpen}
                className="navbar-toggler"
                type="button"
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons objects_globe"></i>
                    <p>Discover</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="now-ui-icons ui-1_settings-gear-63"></i>
                    <p>Settings</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar> */}


      </div>


      <DefaultFooter />
    </>
  )
}

export default DetailPage
