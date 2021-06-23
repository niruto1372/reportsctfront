import React, { useState } from "react";
import { postRegister } from "services/auth";

import { Container, Col } from "reactstrap";
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
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" md="4">
            {/* <SignUp />  */}

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={formulario.name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="lastname"
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
              />
              <input
                type="numer"
                placeholder="area"
                name="idAreas"
                value={formulario.idAreas}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="username"
                name="username"
                value={formulario.username}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Contraseña"
                name="pass1"
                value={formulario.pass1}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Repita contraseña"
                name="pass2"
                value={formulario.pass2}
                onChange={handleChange}
              />
              <button type="submit">registrar</button>
            </form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FormRegisterUsers;
