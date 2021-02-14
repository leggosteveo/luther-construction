import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegistrationPage = ({ onSubmit, onChange, user, errors }) => (
  <div className="login-register-page h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <Form
        className="login-register-form login-register-form"
        method="post"
        onSubmit={onSubmit}
        id="registration-form"
      >
        <legend>
          <h2>Register</h2>
        </legend>
        <Form.Group>
          <Form.Label htmlFor="reg-author-first">First Name:</Form.Label>
          <Form.Control
            id="reg-author-first"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="reg-author-last">Last Name:</Form.Label>
          <Form.Control
            id="reg-author-last"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="reg-email">Email:</Form.Label>
          <Form.Control
            id="reg-email"
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="reg-pass">Password:</Form.Label>
          <Form.Control
            id="reg-pass"
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="reg-confirm-pass">Confirm Password:</Form.Label>
          <Form.Control
            id="reg-confirm-pass"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Button className="register-btn" type="submit" name="button">
          Register{" "}
          <span role="img" aria-label="hammer" alt="hammer">
            🔨
          </span>
        </Button>
        <br />
        <span>
          Already have an account? <a href="/login">Login</a>
        </span>
        {errors && (
          <p className="error-message" aria-live="assertive">
            <span>{errors.email}</span>
            <span>{errors.firstName}</span>
            <span>{errors.lastName}</span>
            <span>{errors.password}</span>
          </p>
        )}
      </Form>
    </div>
  </div>
);

RegistrationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default RegistrationPage;
