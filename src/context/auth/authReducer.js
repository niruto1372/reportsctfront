const AuthReducer = (stateActual, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        autenticado: true,
        name: action.data.name,
        lastname: action.data.lastname,
        userlevel: action.data.userLevel,
        idEmployees: action.data.idemployees,
        token: action.data.token,
        cargando: false,
      };
    case "CERRAR_SESION":
      localStorage.removeItem("token");
      localStorage.removeItem("IdEmployeesRoles");
      return {
        autenticado: false,
        name: null,
        lastname: null,
        userlevel: null,
        idEmployees: null,
        token: null,
        cargando: false,
      };

    default:
      return { ...stateActual };
  }
};

export default AuthReducer;
