import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const DemoPage = ({
  onSubmit,
  onChange,
  user,
  registrationSuccessMessage,
  errors,
  loadingStatus,
}) => (
  <div className="login-register-page h-100">
    <div className="row h-100 justify-content-center align-items-center">
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
        {loadingStatus ? <Loader /> : <div />}
        <div className="login-form-links">
          <Link to="/register">Register</Link> {" | "}
          <a href="mailto:info@bigdogsteve.com?subject=Password Reset&body=Hi, I forgot my password. Please reset my password.">
            Forgot Password?
          </a>
        </div>
      </Form>
    </div>
  </div>
);

DemoPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  demoSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  registrationSuccessMessage: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

export default DemoPage;
