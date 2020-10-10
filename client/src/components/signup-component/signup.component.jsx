import React, { useState } from "react";
import CustomButton from "../Custom-button-component/Custom-button.component";
import Form from "../form-component/form.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import "./signup.styles.scss";

const Signup = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      await signUpStart({ displayName, email, password });
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      /*try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log("Error while User SignUp", error);
      }*/
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-text">
        <h1>NEW HERE?</h1>
        <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
      </div>
      <form onSubmit={handleSubmit}>
        <Form
          name="displayName"
          type="text"
          label="Display Name"
          handleChange={handleChange}
          value={userCredentials.displayName}
          required
        />
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
          value={userCredentials.password}
          required
        />
        <Form
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          handleChange={handleChange}
          value={userCredentials.confirmPassword}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Signup);
