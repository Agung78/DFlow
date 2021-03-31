import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Activate from './pages/Activate'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="index" />
      </Route>
      <Route path="/index">
        <LandingPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/active/:token">
        <Activate />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
}

