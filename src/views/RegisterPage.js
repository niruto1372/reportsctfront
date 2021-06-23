import React, { useState, useContext } from "react";
// reactstrap components
import { Container, Col } from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import AuthContext from "context/auth/authContext";
import { postRegister } from "services/auth";
import NavbarLoginRegister from "components/Navbars/NavbarLoginRegister";

function RegisterPage({ history }) {
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const localAuthContext = useContext(AuthContext);
  const { iniciarSesion } = localAuthContext;

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

      postRegister(objUsuario).then((rpta) => {
        console.log(rpta);
        if (rpta.ok) {
          iniciarSesion(rpta.token);
          history.replace("/user-page");
        }
      });
    }
  };
  return (
    <>
      <NavbarLoginRegister />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          }}
        ></div>
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
        <TransparentFooter />
      </div>
    </>
  );
}

export default RegisterPage;
