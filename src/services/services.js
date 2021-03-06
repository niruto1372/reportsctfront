import axios from "axios";
import { URL_BACKEND } from "environments/environment";


//get services  (es decir los VA´s)
export const getServices = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/services`);
  return response;
};

//get roles (es decir supervisor, lider, junior, etc)
export const getRoles = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/roles`);
  return response;
};

//get areas (es decir supervisor, lider, junior, etc)
export const getAreas = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/areas`);
  return response;
};


//get serivices by employee id (la lista de servicios en los que esta asignado un usuario)
export const getServicesByEmployeeId = async (idEmployees) => {
  const response = await fetch(
    `${URL_BACKEND}/api/mixed/listservicesbyemployeeid/id/${idEmployees}`
  );
  const json = await response.json();
  return json;
};


//get worked hours by employee id (la cantidad de horas trabajadas por usuario en un mes)
export const getWorkedHoursByEmployeeId = async (idEmployees) => {
  const response = await fetch(
    `${URL_BACKEND}/api/workedHoursByEmployee/getworkedhours/id/${idEmployees}`
  );
  const json = await response.json();
  return json;
};


//get remaining  hours to work by employee id (la cantidad de horas por trabajar por usuario en un mes)
export const getRemainingHoursToWorkByEmployeeId = async (idEmployees) => {
  const response = await fetch(
    `${URL_BACKEND}/api/workedHoursByEmployee/getremaininghourstowork/id/${idEmployees}`
  );
  const json = await response.json();
  return json;
};




//post EmployeesRoles (instertar el rol de un empleado en un VA dado)
export const postEmployeesRoles = async (objEmployeesRoles) => {
  let response = await axios({
    method: "POST",
    data: objEmployeesRoles,
    url: `${URL_BACKEND}/api/mixed/insertemployeesroles`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};

//post into WorkedHours (insertar las horas del ultimo VA insertado)
export const postWorkedHours = async (objEmployeesRoles) => {
  let response = await axios({
    method: "POST",
    data: objEmployeesRoles,
    url: `${URL_BACKEND}/api/mixed/insertworkedhours`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response.data;
};

// get  employees, areas, services and roles by Id FOR THE CURRENT DATE
// Dado un usuario, devuelve el último registro insertado con los siguientes campos
// el nombre del empleado, su area, el VA que ha insertado, su rol en el VA
// y la fecha y hora

export const getEmployeesPerHourAreaServicesRolesById = async (idEmployees) => {
  const response = await fetch(
    `${URL_BACKEND}/api/mixed/listemployeesareasroles/id/${idEmployees}`
  );
  const json = await response.json();
  return json;
};

// get  employees, areas, services and roles by Id SINCE THE BEGINING OF TIMES
// dado un usuario, devuelve todos los registros de ese usuario

export const getlistallemployeesById = async (idEmployees) => {
  const response = await fetch(
    `${URL_BACKEND}/api/mixed/listallemployees/id/${idEmployees}`
  );
  const json = await response.json();
  return json;
};

// delete a register given the IdEmployeesRoles
export const deleteRegisterById = async (IdEmployeesRoles) => {
  const response = await fetch(
    `${URL_BACKEND}/api/mixed//deleteEmployeesRoles/id/${IdEmployeesRoles}`,
    {
      method: "DELETE",
    }
  );
  const json = await response.json();
  return json;
};




//post Services (instertar un servicio, es decir un VA)
export const postRegisterServices = async (objServices) => {
  let response = await axios({
    method: "POST",
    data: objServices,
    url: `${URL_BACKEND}/api/services/insert`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};


//post Roles (instertar un rol)
export const postRegisterRoles = async (objRoles) => {
  let response = await axios({
    method: "POST",
    data: objRoles,
    url: `${URL_BACKEND}/api/roles/insert`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};


//get months
export const getMonths = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/mixed/listmonths`);
  return response;
};



//get years
export const getYears = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/mixed/listyears`);
  return response;
};



// get list of employees (name, lastname, email, username)
export const getListOfEmployees = async () => {
  let response = await axios.get(`${URL_BACKEND}/api/employees`);
  return response;
};


//get list of users and other things
export const postUsers = async (objDate) => {
  let response = await axios({
    method: "POST",
    data:  objDate,
    url: `${URL_BACKEND}/api/mixed/listusers`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response.data;
};




//get worked hours by employee id and date
export const postWorkedHoursByEmployeeIdAndDate = async (objIdDate) => {
  let response = await axios({
    method: "POST",
    data:  objIdDate,
    url: `${URL_BACKEND}/api/mixed/listservicesbyemployeeidanddate`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};



export const postRemainingHoursByEmployeeIdAndDate = async (objIdDate) => {
  let response = await axios({
    method: "POST",
    data:  objIdDate,
    url: `${URL_BACKEND}/api/mixed/getremaininghoursbyidanddate`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};

