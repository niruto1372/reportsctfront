import React from "react";

import { Button } from "reactstrap";
import { MDBDataTableV5 } from "mdbreact";
import Swal from "sweetalert2";
import { deleteRegisterById } from "services/services";
import moment from "moment";

const TableServices = ({ data, getData }) => {
  // const [data, setData] = useState([]);

  // const localAuthContext = useContext(AuthContext);
  // const { idEmployees } = localAuthContext;

  // const getData = () => {
  //   getEmployeesPerHourAreaServicesRolesById(idEmployees).then((rpta) => {
  //     setData(rpta);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  //eliminar registro
  const EliminarById = (IdEmployeesRoles) => {
    Swal.fire({
      icon: "warning",
      text: "No podrás deshacer los cambios",
      title: "¿Estas seguro de eliminar este registro?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
    }).then((rpta) => {
      if (rpta.value) {
        //si, eliminar
        deleteRegisterById(IdEmployeesRoles).then((rpta) => {
          if (rpta.resultado) {
            getData();
            Swal.fire("¡Hecho!", "El registro ha sido eliminado", "success");
          } else if (rpta.problem) {
            Swal.fire(
              "¡Error!",
              "No se ha podido eliminar el registro",
              "error"
            );
          }
        });
      }
    });
  };

  const datatable = {
    columns: [
      {
        label: "Nombre",
        field: "NameEmployees",
      },
      // {
      //   label: "Area",
      //   field: "NameAreas",
      // },
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
      {
        label: "Acciones",
        field: "acciones",
      },
    ],
    rows: data.map((objData) => {
      return {
        ...objData,
        Day: moment(objData.Day).add(5, 'hours').format('DD/MM/YYYY'),
        acciones: (
          <>
            <Button
              className="btn-icon btn-round"
              color="danger"
              type="button"
              onClick={() => {
                EliminarById(objData.IdEmployeesRoles);
              }}
            >
              <i className="far fa-trash-alt"></i>
            </Button>
          </>
        ),
      };
    }),
  };
  if (data.length > 0) {
    return (
      <>
        
          <div className="section section-contact-us text-center">
            <h3 className="title">Servicios Registrados</h3>
            
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              responsive
              size={"small"}
              noRecordsFoundLabel={"No hay registros que mostrar"}
              searchLabel={"Buscar"}
            />
          </div>
        
      </>
    );
  } else {
    return <></>;
  }
};

export default TableServices;
