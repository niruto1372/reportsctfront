import AuthContext from "context/auth/authContext";
import React, { useState, useEffect, useContext } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { postEmployeesRoles } from "services/services";
import { postWorkedHours } from "services/services";
import { getServices } from "services/services";
import { getRoles } from "services/services";
import Swal from "sweetalert2";
// core components

const FormRegisterHours = ({ getData, getAllData }) => {
  const [startFocus, setStartFocus] = React.useState(false);
  const [finishFocus, setFinishFocus] = React.useState(false);
  var moment = require("moment");

  const localAuthContext = useContext(AuthContext);
  const { idEmployees } = localAuthContext;

  //get services
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((arrayServices) => {
      setServices(arrayServices.data);
    });
  }, []);

  //get roles
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getRoles().then((arrayRoles) => {
      setRoles(arrayRoles.data);
    });
  }, []);

  const [formulario, setFormulario] = useState({
    IdEmployees: idEmployees,
    IdServices: "",
    IdRoles: "",
    Day: moment().format("YYYY-MM-DD "),
    IntervalStart: "",
    IntervalEnd: "",
  });


  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { IdServices, IdRoles, Day, IntervalStart, IntervalEnd } = formulario; //destructurando los campos del formulario

    if (
      Day !== "" &&
      IdServices !== "" &&
      IdRoles !== "" &&
      IntervalStart !== "" &&
      IntervalEnd !== ""
    ) {
      if (IntervalStart > IntervalEnd) {
        
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: "La hora de inicio no puede ser mayor que la hora final",
          timer: 2000,
        })
      }
      else {
      
        setFormulario({
          IdEmployees: idEmployees,
          IdServices: "",
          IdRoles: "",
          Day: moment().format("YYYY-MM-DD "),
          IntervalStart: "",
          IntervalEnd: "",
          IdEmployeesRoles: "",
        });
        postEmployeesRoles(formulario).then((respuesta) => {
          if (respuesta.data) {
            const objEmployeesRoles = {
              ...formulario,
              IdEmployeesRoles: respuesta.data[0].IdEmployeesRoles,
            };
            postWorkedHours(objEmployeesRoles).then((response) => {
              //localStorage.setItem("IdEmployeesRoles", response.IdEmployeesRoles);
              getData();
              getAllData();
              Swal.fire({
                title: "Hecho!",
                icon: "success",
                text: "registro creado exitosamente",
                timer: 2000,
              });
            });
          }
        });
        return;
      }
    }
    else {
      
      Swal.fire({
        title: "Error!",
        icon: "error",
        text: "Todos los campos deben ser llenados o seleccionados",
        timer: 2000,
      })
    }

  };

  return (
    <>

      <div className="section section-contact-us text-center">
        {/* <h2 className="title">Registrar horas</h2>
          <p className="description">
            En el formulario mostrado a continuaci??n podr??s ingresar las
                horas trabajadas correspondientes al d??a{" "}
                <strong className="text-info">{formulario.Day}</strong> . Debes ingresar las horas
                por servicio independientemente.
          </p> */}
        <Card className="card-signup">
          <Form action="" className="form" method="" onSubmit={handleSubmit}>
            <CardHeader className="text-center">
              <CardTitle className="title-up" >
                <h4 className="title">Formulario</h4>
              </CardTitle>
              {/* <p >
                En el formulario mostrado a continuaci??n podr??s ingresar las
                horas trabajadas correspondientes al d??a{" "}
                <strong className="text-info">{formulario.Day}</strong> . Debes ingresar las horas
                por servicio independientemente.
              </p> */}
              
              
            </CardHeader>
            <CardBody>
              <div className="form-group">
                <label htmlFor="IdServices">Servicios:</label>
                <select
                  className="form-control"
                  name="IdServices"
                  id="IdServices"
                  onChange={handleChange}
                >
                  <option key={0} value="">-- Selecciona una opci??n --</option>
                  {services.map((objServicio) => {
                    return (
                      <option
                        key={objServicio.IdServices}
                        value={objServicio.IdServices}
                      >
                        {objServicio.NameServices}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="IdRoles">Rol en el servicio:</label>
                <select
                  className="form-control"
                  name="IdRoles"
                  id="IdRoles"
                  onChange={handleChange}
                >
                  <option value="">-- Selecciona una opci??n --</option>
                  {roles.map((objRole) => {
                    return (
                      <option key={objRole.IdRoles} value={objRole.IdRoles}>
                        {objRole.NameRoles}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label htmlFor="start">Selecciona la hora de inicio:</label>
              <InputGroup
                className={
                  "input-lg" + (startFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-clock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="time"
                  name="IntervalStart"
                  value={formulario.IntervalStart}
                  onChange={handleChange}
                  onFocus={() => setStartFocus(true)}
                  onBlur={() => setStartFocus(false)}
                ></Input>
              </InputGroup>

              <label htmlFor="end">
                Selecciona la hora de finalizaci??n:
              </label>
              <InputGroup
                className={
                  "input-lg" + (finishFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="far fa-clock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="time"
                  name="IntervalEnd"
                  value={formulario.IntervalEnd}
                  onChange={handleChange}
                  onFocus={() => setFinishFocus(true)}
                  onBlur={() => setFinishFocus(false)}
                ></Input>
              </InputGroup>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                className="btn-blue btn-round"
                color="info"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                size="lg"
                type="submit"
              >
                Registrar
              </Button>
            </CardFooter>
          </Form>

        </Card>
      </div>

    </>
  );
};

export default FormRegisterHours;
