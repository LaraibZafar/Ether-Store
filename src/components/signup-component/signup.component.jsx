import React from "react";
import CustomButton from "../Custom-button-component/Custom-button.component";
import Form from "../form-component/form.component";
import { auth, createUserDocument } from "../../firebase/firebase.utils";
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
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocument(user, { displayName });
        this.state = {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
      } catch (error) {
        console.log("Error while User SignUp", error);
      }
    }
  };

  render() {
    return (
      <div className="sign-up">
        <div className="signup-text">
          <h1>ALREADY HAVE AN ACCOUNT?</h1>
          <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Form
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={this.state.displayName}
            required
          />
          <Form
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Form
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <Form
            name="confirmPassword"
            type="password"
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

export default Signup;
