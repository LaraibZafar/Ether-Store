import React, { useState } from "react";
import "./login.styles.scss";

import Form from "../form-component/form.component";
import CustomButton from "../Custom-button-component/Custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { connect } from "react-redux";

const Login = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
    /*try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error while Logging In", error);
    }*/
  };
  return (
    <div className="login-container">
      <div className="login-text">
        <h1>ALREADY HAVE AN ACCOUNT?</h1>
        <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
      </div>
      <form onSubmit={handleSubmit}>
        <Form
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={userCredentials.email}
          required
        />
        <Form
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          //onKeyDown={onKeyDown}
          value={userCredentials.password}
          required
        />
        <div className="submit-buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Login);
