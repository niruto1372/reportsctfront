import React, { useContext, useState, useEffect } from "react";
import {
  // Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  Row,
  Col,
  // UncontrolledTooltip,
  // Input,
} from "reactstrap";

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import UserNavbar from "components/Navbars/UserNavbar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import FormRegisterHours from "./index-sections/FormRegisterHours";
import TableServices from "components/Users/TableServices";
import TableAllServices from "components/Users/TableAllServices";
import AuthContext from "context/auth/authContext";
import {
  getEmployeesPerHourAreaServicesRolesById,
  getlistallemployeesById,
} from "services/services";
import moment from "moment";

const UserPage = () => {
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const localAuthContext = useContext(AuthContext);
  const { idEmployees, userlevel } = localAuthContext;

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
      {userlevel !== "user" ? <AdminNavbar /> : <UserNavbar />}
      
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h2 className="title">Registrar horas</h2>
            <p className="description">
              En el formulario mostrado a continuación podrás ingresar las horas
              trabajadas correspondientes al día{" "}
              <strong className="text-info">
                {moment().format("YYYY-MM-DD ")}
              </strong>{" "}
              . Debes ingresar las horas por servicio independientemente.
              <strong className="text-info">
                {" "}
                Recuerda que solo se puede ingresar y eliminar registros con la
                fecha de HOY.
              </strong>
            </p>

            <Row>
              <Col md="4" sm="12">
                <FormRegisterHours getData={getData} getAllData={getAllData} />
              </Col>
              <Col md="8">
                <TableServices data={data} getData={getData} />
              </Col>
            </Row>

            <Row>
              <TableAllServices allData={allData} getAllData={getAllData} />
            </Row>

            {/* <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Acciones</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="12">
                        <TableAllServices data={data} getData={getData} />
                      </Col>
                      <Col md="12">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
           */}
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default UserPage;
