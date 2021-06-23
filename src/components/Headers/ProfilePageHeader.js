import AuthContext from "context/auth/authContext";
import React,{useContext} from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {

  let pageHeader = React.createRef();

  const localAuthContext=useContext(AuthContext);
  const {name,lastname}=localAuthContext;

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
          <h3 className="title">{name} {lastname}</h3>
          <p className="category">Área de Proyectos </p>
          <div className="content">
            <div className="social-description">
              <h2>--</h2>
              <p>Total Servicios</p>
            </div>
            <div className="social-description">
              <h2>--</h2>
              <p>Horas laboradas del mes</p>
            </div>
            <div className="social-description">
              <h2>--</h2>
              <p>Horas restantes del mes</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;