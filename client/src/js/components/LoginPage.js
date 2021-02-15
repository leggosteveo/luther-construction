import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const LoginPage = ({
  onSubmit,
  onChange,
  user,
  registrationSuccessMessage,
  errors,
  loadingStatus,
  testApp,
}) => (
  <div className="login-register-page h-100">
    <div className="h-100 justify-content-center align-items-center">
      <Form className="login-register-form" method="post" onSubmit={onSubmit}>
        {registrationSuccessMessage.message ? (
          <p className="success-message">
            {registrationSuccessMessage.message}
          </p>
        ) : (
          <div />
        )}
        <legend>
          <h2>Login</h2>
        </legend>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="user-email">Email</Form.Label>
          <Form.Control
            id="user-email"
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
            placeholder="Enter email"
            required
          />
          {errors.email ? (
            <p className="error-message" aria-live="assertive">
              <span>{errors.email}</span>
            </p>
          ) : (
            <div />
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="user-password">Password</Form.Label>
          <Form.Control
            id="user-password"
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          {errors.password ? (
            <p className="error-message" aria-live="assertive">
              <span>{errors.password}</span>
            </p>
          ) : (
            <div />
          )}
        </Form.Group>
        <Button className="login-btn" type="submit" name="button">
          Log In
        </Button>
        <br />
        <span>
          <a href="#" onClick={testApp} className="login-register-link">
            Test the App
          </a>
        </span>
        {loadingStatus ? <Loader /> : <div />}
        <div className="login-form-links">
          <Link to="/register" className="login-register-link">
            Register
          </Link>
          {" | "}
          <a
            href="mailto:info@bigdogsteve.com?subject=Password Reset&body=Hi, I forgot my password. Please reset my password."
            className="login-register-link"
          >
            Forgot Password?
          </a>
        </div>
      </Form>
    </div>
  </div>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  demoSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  registrationSuccessMessage: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

export default LoginPage;
