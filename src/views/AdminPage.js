import React from "react";
import { Container } from "reactstrap";

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import UserNavbar from "components/Navbars/UserNavbar";
import TabsAdmin from "components/Admin/TabsAdmin";

const UserPage = () => {
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


  // //////////////////////////////////////////////
  // const [data, setData] = useState([]);

  // const getData = () => {
  //   getEmployeesPerHourAreaServicesRolesById(idEmployees).then((rpta) => {
  //     setData(rpta);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <UserNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            {/* <h3 className="title">Registrar Horas</h3>
            <h5 className="description">
              En el formulario mostrado a continuación podrás ingresar las horas
              trabajadas correspondientes al día de hoy. Debes ingresar las
              horas por servicio independientemente.
            </h5> */}
            
            <TabsAdmin />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default UserPage;
