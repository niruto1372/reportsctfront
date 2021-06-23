
import { URL_BACKEND } from "environments/environment";

//Regiter a user
export const postRegister = async (objUsuario) => {
  const response = await fetch(`${URL_BACKEND}/api/employees/insert`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(objUsuario),
  });

  const json = await response.json();
  return json;
};

//Verify token
export const postVerificar = async (token) => {
  const response = await fetch(`${URL_BACKEND}/api/employees/verificar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json.ok;
};

// Login
export const postLogin = async (username, password) => {
  const response = await fetch(`${URL_BACKEND}/api/login/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify( {username:username,  password:password} ),
  });
  const json = await response.json();
  return json;
};
