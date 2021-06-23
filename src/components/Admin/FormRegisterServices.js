import React, { useState } from "react";
import { postRegisterServices } from "services/services";
import Swal from "sweetalert2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

const FormRegisterServices = () => {
  const [ServiceFocus, setServiceFocus] = React.useState(false);
  const [DescriptionFocus, setDescriptionFocus] = React.useState(false);

  const [formulario, setFormulario] = useState({
    service: "",
    description: "",
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { service, description } = formulario;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.trim() !== "" && description.trim() !== "") {
      const service = {
        ...formulario,
      };
      setFormulario({
        service: "",
        description: "",
        error: false,
      });
      postRegisterServices(service).then((rpta) => {
        if (rpta.data.ok) {
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Se ha creado el servicio exitosamente",
            timer: 5000,
          });
        }
      });
    }
  };
  return (
    <>
      {/* <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Servicio"
          name="service"
          value={formulario.service}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          value={formulario.description}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form> */}
      <Card className="card-signup">
        <Form action="" className="form" method="" onSubmit={handleSubmit}>
          <CardHeader className="text-center">

          </CardHeader>
          <CardBody>
            <label htmlFor="start">Ingresa un servicio:</label>
            <InputGroup
              className={
                "input-lg" + (ServiceFocus ? " input-group-focus" : "")
              }
            >
              {/* <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="far fa-clock"></i>
              </InputGroupText>
            </InputGroupAddon> */}
              <Input
                type="text"
                placeholder="Servicio"
                name="service"
                value={formulario.service}
                onChange={handleChange}
                onFocus={() => setServiceFocus(true)}
                onBlur={() => setServiceFocus(false)}
              ></Input>
            </InputGroup>

            <label htmlFor="end">Ingresa una descripción del servicio:</label>
            <InputGroup
              className={
                "input-lg" + (DescriptionFocus ? " input-group-focus" : "")
              }
            >
              {/* <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="far fa-clock"></i>
              </InputGroupText>
            </InputGroupAddon> */}
              <Input
                type="text"
                placeholder="Descripción"
                name="description"
                value={formulario.description}
                onChange={handleChange}
                onFocus={() => setDescriptionFocus(true)}
                onBlur={() => setDescriptionFocus(false)}
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

export default FormRegisterServices;
