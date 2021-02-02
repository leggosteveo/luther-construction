import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import * as actions from "../actions/index";
import Auth from "./modules/Auth";

class Navi extends Component {
  render() {
    const history = this.props.history;
    const user = Auth.getUserName;
    console.log(user.firstName);
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Luther Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.props.user ? (
            <Nav className="ml-auto">
              <span>{this.props.user.firstName}</span>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link
                href="#"
                onClick={async (e) => {
                  e.preventDefault();
                  await Auth.deauthenticateUser();
                  // this.props.dispatch(actions.logoutUser());
                  this.setState({ userLoggedIn: false });
                  this.props.dispatch(actions.logoutUser());
                  history.push("/login");
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.auth.loginErrorMessage,
  registrationSuccessMessage: state.auth.registrationSuccessMessage,
  loginRedirect: state.auth.loginRedirect,
  loadingStatus: state.auth.authLoadingStatus,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps)(withRouter(Navi));
