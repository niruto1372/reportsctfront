import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LandingPage from 'views/examples/LandingPage';
import LoginPage from 'views/LoginPage';
import ProfilePage from 'views/examples/ProfilePage';
import AdminPage from 'views/AdminPage';
import RegisterPage from 'views/RegisterPage';
import Index from 'views/Index';
import NucleoIcons from 'views/NucleoIcons';
import UserPage from 'views/UserPage';
import PrivateRoute from './PrivateRoute';

const RouterMain = () => {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/index" render={(props) => <Index {...props} />} />

          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/login-page"
            render={(props) => <LoginPage {...props} />}
          />
          
          <Route path={"/register-page"} component={RegisterPage} />
          {/* <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          /> 
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/nucleo-icons"
            render={(props) => <NucleoIcons {...props} />}
          />
          
          */}
          <PrivateRoute path={"/user-page"} component={UserPage} />
          <PrivateRoute path={"/profile-page"} component={ProfilePage} />
          <PrivateRoute path={"/admin-page"} component={AdminPage} />

          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Router>
    </>
  )
}

export default RouterMain
