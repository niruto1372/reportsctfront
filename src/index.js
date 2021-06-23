import React from "react";
import ReactDOM from "react-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

import AuthState from "context/auth/authState";
import RouterMain from "routers/RouterMain";

ReactDOM.render(
  <AuthState>
    <RouterMain />
  </AuthState>,
  document.getElementById("root")
);
