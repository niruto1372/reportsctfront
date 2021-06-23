import React, { useState } from "react";
import { postRegister } from "services/auth";

import {
  Button
} from "reactstrap";
import Swal from "sweetalert2";

const FormRegisterUsers = () => {

  const [formulario, setFormulario] = useState({
    name: "",
    lastname: "",
    email: "",
    idAreas: "",
    username: "",
    pass1: "",
    pass2: "",
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { name, lastname, email, idAreas, username, pass1, pass2 } = formulario;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() !== "" &&
      lastname.trim() !== "" &&
      email.trim() !== "" &&
      idAreas.trim() !== "" &&
      username.trim() !== "" &&
      pass1.trim() !== "" &&
      pass2.trim() !== "" &&
      pass1 === pass2
    ) {
      const objUsuario = {
        ...formulario,
        password: pass1,
        userlevel: "user",
      };
      setFormulario({
        name: "",
        lastname: "",
        email: "",
        idAreas: "",
        username: "",
        pass1: "",
        pass2: "",
        error: false,
      });
      postRegister(objUsuario).then((rpta) => {
        console.log(rpta);
        if (rpta.ok) {
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Se ha creado el usuario exitosamente",
            timer: 2000,
          });
        }
      });
    }
  };
  return (
    <>
      

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
              />
              <br />
              <input
                type="numer"
                className="form-control"
                placeholder="Area a la que pertenece"
                name="idAreas"
                value={formulario.idAreas}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={formulario.username}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="pass1"
                value={formulario.pass1}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Repita contraseña"
                name="pass2"
                value={formulario.pass2}
                onChange={handleChange}
              />
              <br />
              <Button
                className="btn-blue btn-round"
                color="info"
                // onClick={(e) => e.preventDefault()}
                size="lg"
                type="submit"
              >
                Registrar
              </Button>
              {/* <button type="submit" className="btn-blue btn-round" color="info"> 
                registrar
              </button> */}
            </form>
          
    </>
  );
};

export default FormRegisterUsers;
