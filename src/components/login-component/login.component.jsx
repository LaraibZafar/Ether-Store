import React from "react";
import "./login.styles.scss";
import Form from "../form-component/form.component";

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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("State Value: " + this.state.email);
    this.setState({ email: "", password: "" });
  };

  render() {
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
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <Form
            name="password"
            type="password"
            handleChange={this.handleChange}
            onKeyDown={this.onKeyDown}
            value={this.state.password}
            required
          />

          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default Login;
