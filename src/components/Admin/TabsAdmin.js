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

import FormRegisterHoursAdmin from "./FormRegisterHoursAdmin";
import FormRegisterUsers from "./FormRegisterUsers";
import FormRegisterServices from "./FormRegisterServices";
import FormRegisterRoles from "./FormRegisterRoles";
import TableAllServices from "components/Users/TableAllServices";
import TableServices from "components/Users/TableServices";
import AuthContext from "context/auth/authContext";
import {
  getEmployeesPerHourAreaServicesRolesById,
  getlistallemployeesById,
} from "services/services";
import { getAreas } from "services/services";

const TabsAdmin = () => {
  const [iconPills, setIconPills] = React.useState("1");

  const localAuthContext = useContext(AuthContext);
  // const { idEmployees } = localAuthContext;

  var idEmployees = 1; // NO ESTA JALANDO LA VARIABLE DE LOCAL CONTEXT



  //////////////////////////////////////////////
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  const getData = () => {
    getEmployeesPerHourAreaServicesRolesById(idEmployees).then((rpta) => {
      setData(rpta);
    });
  };

  const getAllData = () => {
    getlistallemployeesById(idEmployees).then((rpta) => {
      setAllData(rpta);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getAllData();
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
                      <FormRegisterHoursAdmin
                      idEmployees={idEmployees}
                        getData={getData}
                        getAllData={getAllData}
                      />
                    </Col>
                    <Col className="ml-auto mr-auto" md="12" xl="12">
                      <TableServices data={data} getData={getData} />
                      <TableAllServices
                        allData={allData}
                        getAllData={getAllData}
                      />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills2">
                    <p>Completa el formulario para registrar usuarios</p>
                    <Col className="ml-auto mr-auto" md="7">
                      <FormRegisterUsers />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills3">
                    <p>Completa el formulario para registrar servicios</p>
                    <Col className="ml-auto mr-auto" md="7">
                      <FormRegisterServices />
                    </Col>
                  </TabPane>
                  <TabPane tabId="iconPills4">
                    <p>Para registrar y editar roles de los roles</p>
                    <Col className="ml-auto mr-auto" md="10">
                      <FormRegisterRoles />
                    </Col>
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
