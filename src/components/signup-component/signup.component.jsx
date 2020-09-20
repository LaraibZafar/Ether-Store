import React from "react";
import CustomButton from "../Custom-button-component/Custom-button.component";
import Form from "../form-component/form.component";

import { auth, createUserDocument } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import "./signup.styles.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      await signUpStart({ displayName, email, password });
      this.setState({
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

  render() {
    return (
      <div className="signup-container">
        <div className="signup-text">
          <h1>NEW HERE?</h1>
          <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Form
            name="displayName"
            type="text"
            label="Display Name"
            handleChange={this.handleChange}
            value={this.state.displayName}
            required
          />
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
            value={this.state.password}
            required
          />
          <Form
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Signup);
