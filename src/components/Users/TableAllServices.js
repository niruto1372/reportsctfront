import React from "react";

import { Col } from "reactstrap";
import { MDBDataTableV5 } from "mdbreact";

const TableAllServices = ({ allData }) => {
  //const [data, setData] = useState([]);

  // const localAuthContext = useContext(AuthContext);
  // const { idEmployees } = localAuthContext;

  // useEffect(() => {
  //   getlistallemployeesById(idEmployees).then((rpta) => {
  //     setData(rpta);
  //   });
  // }, []);

  const datatable = {
    columns: [
      {
        label: "Nombre",
        field: "NameEmployees",
      },
      {
        label: "Area",
        field: "NameAreas",
      },
      {
        label: "Servicio",
        field: "NameServices",
      },
      {
        label: "Rol en el Servicio",
        field: "NameRoles",
      },
      {
        label: "Hora Inicio",
        field: "IntervalStart",
      },
      {
        label: "Hora Fin",
        field: "IntervalEnd",
      },
      {
        label: "Fecha",
        field: "Day",
      },
    ],
    rows: allData.map((objData) => {
      return {
        ...objData,
      };
    }),
  };

  return (
    <>
      
      <Col className="ml-auto mr-auto" md="12">
        <div className="section section-contact-us text-center">
          <h2 className="title">Histórico de Servicios Registrados</h2>
          {/* <p className="description">Lista de servicios ingresados.</p> */}

          <MDBDataTableV5
            hover
            bordered
            size={"small"}
            entriesOptions={[10, 20, 25]}
            entries={10}
            pagesAmount={4}
            data={datatable}
            responsive
          />
        </div>
      </Col>
    </>
  );
};

export default TableAllServices;
