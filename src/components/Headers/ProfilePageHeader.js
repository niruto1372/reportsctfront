import AuthContext from "context/auth/authContext";
import React, { useContext, useState, useEffect } from "react";

// reactstrap components
import { Container } from "reactstrap";
import { getWorkedHoursByEmployeeId } from "services/services";
import { getServicesByEmployeeId } from "services/services";

// core components
import moment from "moment";
import { getRemainingHoursToWorkByEmployeeId } from "services/services";

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  const localAuthContext = useContext(AuthContext);
  const { name, lastname, idEmployees } = localAuthContext;

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [countservicesByEmployeeId, setcountservicesByEmployeeId] = useState(0);

  const getServicesByEmployeeIdFunction = () => {
    getServicesByEmployeeId(idEmployees).then((rpta) => {
      setcountservicesByEmployeeId(rpta.length);
    });
  };

  useEffect(() => {
    getServicesByEmployeeIdFunction();
  }, []);

  const [countHoursByEmployeeId, setCountHoursByEmployeeId] = useState(0);

  const getCountHoursByEmployeeIdFunction = () => {
    getWorkedHoursByEmployeeId(idEmployees).then((rpta) => {
      setCountHoursByEmployeeId(rpta[0].WorkedHours);
    });
  };

  useEffect(() => {
    getCountHoursByEmployeeIdFunction();
  }, []);



  const [countRemainingHoursToWork, setCountRemainingHoursToWork] = useState(0);

  const getRemainingHoursToWorkFunction = () => {
    getRemainingHoursToWorkByEmployeeId(idEmployees).then((rpta) => {
      setCountRemainingHoursToWork(rpta[0].RemainingHoursToWork);
    });
  };
  useEffect(() => {
    getRemainingHoursToWorkFunction();
  }, []);

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/logo1.png")}></img>
          </div>
          <h3 className="title">
            {name} {lastname}
          </h3>
          <p className="category">Área de Proyectos </p>
          <div className="content">
            <div className="social-description">
              <h2>{countservicesByEmployeeId}</h2>
              <p>Total Servicios Asignados</p>
            </div>
            
            <div className="social-description">
              <h2>{countHoursByEmployeeId}</h2>
              <p>Horas laboradas durante el mes</p>
            </div>
            
            <div className="social-description">
              <h2>{countRemainingHoursToWork}</h2>
              <p>Horas por laborar en el mes</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
