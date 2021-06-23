import React, { useState } from "react";
import Swal from "sweetalert2";
import { postRegisterRoles } from "services/services";
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

const FormRegisterRoles = () => {


  const [RolesFocus, setRolesFocus] = React.useState(false);


  const [formulario, setFormulario] = useState({
    role: "",    
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { role } = formulario;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      role.trim() !== "" 
    ) {
      const objRole = {
        ...formulario,
      };
      setFormulario({
        role: "",
        error: false,
      });
      postRegisterRoles(objRole).then((rpta) => {
        if (rpta.data.ok) {
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Se ha creado el rol exitosamente",
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
          placeholder="Rol"
          name="role"
          value={formulario.role}
          onChange={handleChange}
        />
        
        <button type="submit">Registrar</button>
      </form> */}

      <Card className="card-signup">
        <Form action="" className="form" method="" onSubmit={handleSubmit}>
          <CardHeader className="text-center">

          </CardHeader>
          <CardBody>
            <label htmlFor="start">Ingresa un rol:</label>
            <InputGroup
              className={
                "input-lg" + (RolesFocus ? " input-group-focus" : "")
              }
            >
              
              <Input
                 type="text"
                 placeholder="Rol"
                 name="role"
                 value={formulario.role}
                onChange={handleChange}
                onFocus={() => setRolesFocus(true)}
                onBlur={() => setRolesFocus(false)}
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
  )
}

export default FormRegisterRoles
