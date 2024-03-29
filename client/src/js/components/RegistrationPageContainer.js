import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as actions from "../actions/index";
import RegistrationPage from "./RegistrationPage";

export class RegistrationPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  componentDidMount() {
    document.querySelector("head > title").innerHTML =
      "Registration | LUTHER CONSTRUCTION";
  }

  changeUser = (e) => {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user,
    });
  };

  processForm = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.registerUser(this.state.user));
  };

  render() {
    return (
      <Route
        path="/register"
        render={() =>
          // eslint-disable-line
          !this.props.registerSuccess.success ? (
            <RegistrationPage
              onSubmit={this.processForm}
              onChange={this.changeUser}
              user={this.state.user}
              errors={this.props.errors}
            />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.auth.registrationErrorMessage,
  registerSuccess: state.auth.registrationSuccessMessage,
});

export default connect(mapStateToProps)(RegistrationPageContainer);
