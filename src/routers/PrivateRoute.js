import AuthContext from "context/auth/authContext";
import React, { useContext } from "react";
import {  Route,  Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component }) => {
  const localAuthContext = useContext(AuthContext);
  const { autenticado, cargando } = localAuthContext;

  if (cargando) {
    return <h5>Cargando...</h5>;
  } else {
    return autenticado ? (
      <>
        {/* <Route path={path} render={(props) => <Component {...props} />} /> */}
        <Route path={path} component={Component} />
      </>
    ) : (
      <Redirect to={"/index"} />
    );
  }
};

export default PrivateRoute;
