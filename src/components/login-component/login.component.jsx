import React from "react";
import "./login.styles.scss";

import Form from "../form-component/form.component";
import CustomButton from "../Custom-button-component/Custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("State Value: " + this.state.email);
    console.log("Event Value: " + event.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
    /*try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error while Logging In", error);
    }*/
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="login-container">
        <div className="login-text">
          <h1>ALREADY HAVE AN ACCOUNT?</h1>
          <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Form
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Form
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            onKeyDown={this.onKeyDown}
            value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(Login);
