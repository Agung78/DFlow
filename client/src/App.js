import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Activate from './pages/Activate'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'

export default function App() {
  function getIsLoggedIn() {
    if (localStorage.getItem('access_token')) return true;
    return false;
  }
  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (getIsLoggedIn()) {
        next();
      }
      next.redirect('/');
    } else {
      if (getIsLoggedIn()) {
        next.redirect('/profile');
      }
      next();
    }
  };
  return (
    <GuardProvider guards={[requireLogin]}>
      <Switch>
        <Route exact path="/">
          <Redirect to="index" />
        </Route>
        <GuardedRoute path="/index" exact component={LandingPage} />
        <GuardedRoute path="/register" exact component={Register} />
        <GuardedRoute path="/login" exact component={Login} />
        <GuardedRoute path="/active/:token" exact component={Activate} />
        <GuardedRoute path="/forgot-password" exact component={ForgotPassword}/>
        <GuardedRoute path="/reset-password" exact component={ResetPassword}/>
        <GuardedRoute path="/profile" exact component={Profile} meta={{ auth: true }} />
      </Switch>
    </GuardProvider>

    // <Switch>
    //   <Route exact path="/">
    //     <Redirect to="index" />
    //   </Route>
    //   <Route path="/index">
    //     <LandingPage />
    //   </Route>
    //   <Route path="/register">
    //     <Register />
    //   </Route>
    //   <Route path="/active/:token">
    //     <Activate />
    //   </Route>
    //   <Route path="/login">
    //     <Login />
    //   </Route>
    //   <Route path="/forgot-password">
    //     <ForgotPassword />
    //   </Route>
    //   <Route path="/reset-password">
    //     <ResetPassword />
    //   </Route>
    //   <Route path="/profile">
    //     <Profile />
    //   </Route>
    // </Switch>
  );
}

