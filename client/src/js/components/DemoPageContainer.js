import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as actions from "../actions/index";
import DemoPage from "./DemoPage";

export class DemoPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "tester@test.com",
        password: "Testing",
      },
    };
  }

  componentDidMount() {
    document.querySelector("head > title").innerHTML =
      "Login | LUTHER CONSTRUCTION";
  }

  processForm = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.loginUser(this.state.user));
  };

  render() {
    return (
      <Route
        path="/demo"
        render={() =>
          // eslint-disable-line
          !this.props.loginRedirect ? (
            <DemoPage
              onSubmit={this.processForm}
              onChange={this.changeUser}
              demoSubmit={this.demoSubmit}
              user={this.state.user}
              registrationSuccessMessage={this.props.registrationSuccessMessage}
              errors={this.props.errors}
              loadingStatus={this.props.loadingStatus}
            />
          ) : (
            <Redirect to="/profile" />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.auth.loginErrorMessage,
  registrationSuccessMessage: state.auth.registrationSuccessMessage,
  loginRedirect: state.auth.loginRedirect,
  loadingStatus: state.auth.authLoadingStatus,
});

export default connect(mapStateToProps)(DemoPageContainer);
