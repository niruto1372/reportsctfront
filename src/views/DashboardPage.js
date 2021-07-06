import React, { useState, useEffect } from 'react'

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form,
} from "reactstrap";


// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

//
import { postRegisterRoles } from 'services/services';
import { getYears } from 'services/services';
import { getMonths } from 'services/services';
import { postUsers } from 'services/services';

// more components
import CardUser from './../components/Admin/CardUser';
import TableReport from 'components/Admin/TableReport';


const DashboardPage = () => {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  //////////////////////


  //get years
  const [years, setYears] = useState([]);
  useEffect(() => {
    getYears().then((arrayYears) => {
      setYears(arrayYears.data);
    });
  }, []);




  //get months
  const [months, setMonths] = useState([]);
  useEffect(() => {
    getMonths().then((arrayMonths) => {
      setMonths(arrayMonths.data);
    });
  }, []);

  //get users
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   getUsers().then((arrayUsers) => {
  //     setUsers(arrayUsers.data);
  //   });
  // }, []);



  const [formulario, setFormulario] = useState({
    year: "",
    month: "",
    error: false,
  });


  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState([]);
  const[date,setDate]=useState(null);

  const { year, month } = formulario;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      year.trim() !== "" && month.trim() !== ""
    ) {
      const objDate = {    
        id:1,
        yearmonth: `${year}-${month}-01`,
      };
      setDate(objDate.yearmonth);
      // setFormulario({
      //   year: "",
      //   month:"",
      //   error: false,
      // });
      postUsers(objDate).then((rpta) => {      
        setData(rpta);
        console.log(rpta)
      });
    }
  };


  return (
    <>
      <AdminNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">

                <Form className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col className="ml-auto mr-auto" md="5">
                      <label htmlFor="month">Selecciona un mes</label>
                      <select
                        className="form-control"
                        name="month"
                        id="month"
                        onChange={handleChange}
                      >
                        <option value="">-- Selecciona una opción --</option>
                        {months.map((objMonth) => {
                          return (
                            <option
                              key={objMonth.month}
                              value={objMonth.month}
                            >
                              {objMonth.month}
                            </option>
                          );
                        })}

                      </select>
                    </Col>
                    <Col className="ml-auto mr-auto" md="5">
                      <label htmlFor="year">Selecciona un año</label>
                      <select
                        className="form-control"
                        name="year"
                        id="year"
                        onChange={handleChange}
                      >
                        <option value="">-- Selecciona una opción --</option>
                        {years.map((objYear) => {
                          return (
                            <option
                              key={objYear.year}
                              value={objYear.year}
                            >
                              {objYear.year}
                            </option>
                          );
                        })}

                      </select>
                    </Col>
                    <Col md="2">
                      <Button className="btn-fill" color="info" size="lg">
                        Buscar
                      </Button></Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>




        <div className="section section-dark text-center">
          <Container>
            {/* <h2 className="title">Let's talk about us</h2> */}
            <Row>
              {data.map((objPerson) => {
                return (
                  <CardUser  key={objPerson.IdEmployees} date={date}  IdEmployees={objPerson.IdEmployees} NameEmployees={objPerson.NameEmployees} LastNameEmployees={objPerson.LastNameEmployees} WorkedHours={objPerson.WorkedHours}/>

                  );
              })};

            </Row>
          </Container>
        </div>

        <div className="section  text-center">
          <Container>
            <Row>
              <Col>
              <h2 className="title">Mapa de carga laboral mensual de personal de proyectos</h2>

                <TableReport   data={data}/>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default DashboardPage
