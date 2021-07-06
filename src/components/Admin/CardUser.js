import React, { useState, useEffect } from 'react'

// reactstrap components
import {
  Badge,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";
import { postWorkedHoursByEmployeeIdAndDate } from 'services/services';
import { postRemainingHoursByEmployeeIdAndDate } from 'services/services';
import { getWorkedHoursByEmployeeId } from 'services/services';

const CardUser = ({ IdEmployees, NameEmployees, LastNameEmployees, WorkedHours, date }) => {

  const [countHoursByEmployeeId, setCountHoursByEmployeeId] = useState(null);


  var objIdDate = {
    id: IdEmployees,
    yearmonth: date

  }

  const getCountHoursByEmployeeIdFunction = () => {
    postWorkedHoursByEmployeeIdAndDate(objIdDate).then((rpta) => {
      setCountHoursByEmployeeId(rpta.data.results[0].WorkedHours);
    });
  };
  useEffect(() => {
    getCountHoursByEmployeeIdFunction();
  }, []);





  const [countRemainingHoursToWork, setCountRemainingHoursToWork] = useState(0);

  const getRemainingHoursToWorkFunction = () => {
    postRemainingHoursByEmployeeIdAndDate(objIdDate).then((rpta) => {
      setCountRemainingHoursToWork(rpta.data.results[0].RemainingHoursToWork);
    });
  };
  useEffect(() => {
    getRemainingHoursToWorkFunction();
  }, []);


  return (
    <>
      <Col md="4">
        <Card className="card-profile card-plain">
          {/* <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("assets/img/logo1.png")
                        }
                        width="150"
                      />
                    </a>
                  </div> */}
          <CardBody>
            <a className="link" href="/detail-page">
              <div className="author">
                <CardTitle tag="h4">{NameEmployees}</CardTitle>
                <h6 className="card-category">{LastNameEmployees}</h6>
              </div>
            </a>

         

            <p className="card-description text-center">
              <strong>Horas laboradas en el mes: {countHoursByEmployeeId ? <Badge color="neutral" className="mr-1">{countHoursByEmployeeId}</Badge>  :<Badge color="neutral" className="mr-1">00:00:00</Badge>  }</strong>

              <br />
              <strong>Capacidad disponible (horas): {countRemainingHoursToWork? <Badge color="neutral" className="mr-1">{countRemainingHoursToWork}</Badge>  : <Badge color="neutral" className="mr-1">00:00:00</Badge> }</strong>

              <br />
              <strong>Capacidad disponible (dias):</strong>
            </p>
          </CardBody>
          
        </Card>
      </Col>
    </>
  )
}

export default CardUser
