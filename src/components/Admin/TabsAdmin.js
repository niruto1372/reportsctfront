import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import { getEmployeesPerHourAreaServicesRolesById } from "services/services";

import FormRegisterHoursAdmin from "./FormRegisterHoursAdmin";
import FormRegisterUsers from "./FormRegisterUsers";
import FormRegisterServices from "./FormRegisterServices";
import FormRegisterRoles from "./FormRegisterRoles";
import TableAllServices from "components/Users/TableAllServices";
import TableServices from "components/Users/TableServices";
import AuthContext from "context/auth/authContext";


const TabsAdmin = ({idEmployees}) => {
  const [iconPills, setIconPills] = React.useState("1");

  // const localAuthContext = useContext(AuthContext);
  // const { idEmployees} = localAuthContext;


  //////////////////////////////////////////////
  const [data, setData] = useState([]);

  const getData = () => {
    getEmployeesPerHourAreaServicesRolesById(idEmployees).then((rpta) => {
      setData(rpta);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12" xl="12">
            <p className="category">Selecciona una opción </p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={iconPills === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("1");
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                      Registrar Horas
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={iconPills === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("2");
                      }}
                    >
                      <i className="now-ui-icons shopping_cart-simple"></i>
                      Registrar Usuarios
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={iconPills === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("3");
                      }}
                    >
                      <i className="now-ui-icons shopping_shop"></i>
                      Registrar Servicios
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={iconPills === "4" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("4");
                      }}
                    >
                      <i className="now-ui-icons ui-2_settings-90"></i>
                      Registrar Roles
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent
                  className="text-center"
                  activeTab={"iconPills" + iconPills}
                >
                  <TabPane tabId="iconPills1">
                  
                    <Col className="ml-auto mr-auto" md="12" xl="12">
                      <FormRegisterHoursAdmin getData={getData} />
                    </Col>
                    <Col className="ml-auto mr-auto" md="12" xl="12">
                      <TableServices data={data} getData={getData} />
                      <TableAllServices data={data} getData={getData} />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills2">
                    <p>Completa el formulario para registrar  usuarios</p>
                    <Col>
                    <FormRegisterUsers />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills3">
                    <p>Completa el formulario para registrar servicios</p>
                    <Col>
                    <FormRegisterServices />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills4">
                    <p>Para registrar y editar roles de los roles</p>
                    <FormRegisterRoles/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TabsAdmin;
