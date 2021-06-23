import React, { useReducer, useEffect } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
//import { postVerificar } from "services/auth";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    autenticado: false,
    usu_nom: null,
    usu_lastname: null,
    usu_level: null,
    usu_id:null,
    token: null,
    cargando: true,
    IdEmployeesRoles: null,
  });

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, []);

  const iniciarSesionConLocalStorage = () => {
    if (!localStorage.getItem("token")) return;
    const token = localStorage.getItem("token");
    const payloadEnc = token.split(".")[1];
    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    // postVerificar(token).then((rpta) => {
    //   rpta
    //     ? dispatch({
    //         type: "INICIAR_SESION",
    //         data: { ...payloadJSON, token },
    //       })
    //     : dispatch({
    //  type: "CERRAR_SESION",
    //});
    // });

    token
      ? dispatch({
          type: "INICIAR_SESION",
          data: { ...payloadJSON, token },
        })
      : dispatch({
          type: "CERRAR_SESION",
        });
  };

  const iniciarSesion = (token) => {
    const payloadEnc = token.split(".")[1];
    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    localStorage.setItem("token", token);

    dispatch({
      type: "INICIAR_SESION",
      data: { ...payloadJSON, token },
    });
  };

  const cerrarSesion = () => {
    dispatch({ type: "CERRAR_SESION" });
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado: state.autenticado,
        name: state.name,
        lastname: state.lastname,
        userlevel: state.userlevel,
        idEmployees: state.idEmployees,
        cargando: state.cargando,
        iniciarSesion: iniciarSesion,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
