import React from "react";
import "./Login-Signup-page.styles.scss";
import Signup from "../../components/signup-component/signup.component";
import Login from "../../components/login-component/login.component";

const LoginSignUpPage = () => (
  <div className="login-signup">
    <Login />
    <Signup />
  </div>
);

export default LoginSignUpPage;
