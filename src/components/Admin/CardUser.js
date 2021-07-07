import React, { useState, useEffect } from 'react'

// reactstrap components
import {
  Badge,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Progress
} from "reactstrap";
import { postWorkedHoursByEmployeeIdAndDate } from 'services/services';
import { postRemainingHoursByEmployeeIdAndDate } from 'services/services';


const CardUser = ({ IdEmployees, NameEmployees, LastNameEmployees, WorkedHours, date }) => {
  var objIdDate = {
    id: IdEmployees,
    yearmonth: date
  }

  //get worked hours of an employee
  const [countHoursByEmployeeId, setCountHoursByEmployeeId] = useState([null]);
  const [workedhoursmin, setWorkedhoursmin] = useState(0); // variable de estado para obtener las horas trabajadas y dibujar en el progress bar. considerar aumentar los minutos para tener una hora completa
  const getCountHoursByEmployeeIdFunction = () => {
    postWorkedHoursByEmployeeIdAndDate(objIdDate).then((rpta) => {
      setCountHoursByEmployeeId(rpta.data.results[0].WorkedHours);
      if (rpta.data.results[0].WorkedHours !== null) {
        setWorkedhoursmin((rpta.data.results[0].WorkedHours).split(":")[0]);
      } else {
        setWorkedhoursmin(0);
      }
    });
  };
  useEffect(() => {
    getCountHoursByEmployeeIdFunction();
  }, []);




  // get remaining hours to work of an employee
  const [countRemainingHoursToWork, setCountRemainingHoursToWork] = useState(0);
  const [remaininghoursmin, setRemaininghoursmin] = useState(0); // variable de estado para obtener las horas restantes por trabajar y dibujar en el progress bar. considerar aumentar los minutos para tener una hora completa
  const [remainingWorkedDays,setRemainingWorkedDays]=useState(0);
  const getRemainingHoursToWorkFunction = () => {
    postRemainingHoursByEmployeeIdAndDate(objIdDate).then((rpta) => {
      setCountRemainingHoursToWork(rpta.data.results[0].RemainingHoursToWork);
      if (rpta.data.results[0].RemainingHoursToWork !== null) {
        setRemaininghoursmin((rpta.data.results[0].RemainingHoursToWork).split(":")[0]);
        setRemainingWorkedDays(Math.ceil(((rpta.data.results[0].RemainingHoursToWork).split(":")[0])/9.5))
      } else {
        setRemaininghoursmin(0);
      }
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



            <div className="card-description">
              <strong>Horas laboradas en el mes: {countHoursByEmployeeId ? <Badge color="neutral" className="mr-1">{countHoursByEmployeeId}</Badge> : <Badge color="neutral" className="mr-1">00:00:00</Badge>}</strong>
              <div className="progress-container progress-info">


                {/* <span className="progress-badge"> horas: </span> */}
                <Progress max="218" value={workedhoursmin}>
                  {/* <h3>
                    <span className="progress-value">{countHoursByEmployeeId ? <Badge color="neutral" className="mr-1">{countHoursByEmployeeId}</Badge> : <Badge color="neutral" className="mr-1">00:00:00</Badge>}</span>
                  </h3> */}
                </Progress>
              </div>
              <br />
              <strong>Capacidad disponible (horas): {countRemainingHoursToWork ? <Badge color="neutral" className="mr-1">{countRemainingHoursToWork}</Badge> : <Badge color="neutral" className="mr-1">00:00:00</Badge>}</strong>
              <div className="progress-container progress-info">
                {/* <span className="progress-badge ">Info</span> */}
                <Progress max="218" value={remaininghoursmin}>
                  {/* <span className="progress-value">60%</span> */}
                </Progress>
              </div>
              <br />
              <strong>Capacidad disponible (dias):<Badge color="neutral" className="mr-1">{remainingWorkedDays}</Badge></strong>
            </div>
          </CardBody>

        </Card>
      </Col>
    </>
  )
}

export default CardUser
