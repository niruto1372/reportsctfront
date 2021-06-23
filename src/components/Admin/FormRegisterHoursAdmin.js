
import React, { useState, useEffect } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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

const FormRegisterHoursAdmin = ({ getData,idEmployees }) => {
  const [startFocus, setStartFocus] = React.useState(false);
  const [finishFocus, setFinishFocus] = React.useState(false);
  var moment = require("moment");


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

  // set formulario
  const [formulario, setFormulario] = useState({
    IdEmployees: idEmployees,
    IdServices: "",
    IdRoles: "",
    Day: moment().format("YYYY-MM-DD "),
    IntervalStart: "",
    IntervalEnd: "",
  });

  const [error, setError] = useState(false);

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
      setError(false);
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
            getData();
            Swal.fire({
              title: "Hecho!",
              icon: "success",
              text: "registro creado exitosamente",
              timer: 5000,
            });
          });
        }
      });
      return;
    }
    setError(true);
  };

  return (
    <>
      
      <p className="description">
        En el formulario mostrado a continuación podrás ingresar las horas
        trabajadas correspondientes al día {" "}
        <strong className="text-info">{formulario.Day}</strong>. No olvides que estas horas corresponden a
        los servicios en los que te encuentras trabajando.
        
      </p>
      <Card className="card-signup">
        <Form action="" className="form" method="" onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            {error === true ? (
              <div className="alert alert-danger">
                todos los campos deben ser llenados o seleccionados
              </div>
            ) : null}
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
                <option value="">-- Selecciona una opción --</option>
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
                <option value="">-- Selecciona una opción --</option>
                {roles.map((objRole) => {
                  return (
                    <option key={objRole.IdRoles} value={objRole.IdRoles}>
                      {objRole.NameRoles}
                    </option>
                  );
                })}
              </select>
            </div>
            <label htmlFor="roles">Selecciona la hora de inicio:</label>
            <InputGroup
              className={"input-lg" + (startFocus ? " input-group-focus" : "")}
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

            <label htmlFor="roles">Selecciona la hora de finalización:</label>
            <InputGroup
              className={"input-lg" + (finishFocus ? " input-group-focus" : "")}
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
    </>
  );
};

export default FormRegisterHoursAdmin;
