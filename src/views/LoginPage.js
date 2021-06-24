import React, { useState, useContext } from "react";

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
  Container,
  Col,
} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import AuthContext from "context/auth/authContext";
import { postLogin } from "services/auth";
import NavbarLoginRegister from "components/Navbars/NavbarLoginRegister";
import Swal from "sweetalert2";

function LoginPage({ history }) {
 

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  
  const localAuthContext = useContext(AuthContext);
  const { iniciarSesion, userlevel } = localAuthContext;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });




  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postLogin(form.username, form.password).then((rpta) => {
      
      if (rpta.ok) {
        iniciarSesion(rpta.token);
        // revisar por que no esta jalando el nivel de usuario 
        //para poder redireccionar a la pagina que corresponde
        console.log(`userlevel: ${userlevel}`);
        if(userlevel==="admin"){
          history.replace("/admin-page");
        }
        else{
          history.replace("/user-page");
        }
      } else if (rpta.ok === false) {
        
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${rpta.message}`,
          timer: 3500,
        });
      }
    });
  };
  

  return (
    <>
      <NavbarLoginRegister />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    {/* <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/logo1.png")}
                      ></img>
                    </div> */}
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Usuario"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contraseña"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={onSubmit}
                      size="lg"
                      type="submit"
                    >
                      Iniciar sesión
                    </Button>

                    {/* <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="/register-page"
                          
                        >
                          Crear una cuenta
                        </a>
                      </h6>
                    </div> */}
                    <div className="pull-right">
                      <h6>
                        <a className="link" href="/index">
                          ¿Necesitas ayuda?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
