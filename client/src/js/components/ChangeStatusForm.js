import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Form from "react-bootstrap/Form";

export class changeStatusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      shouldDisableForm: true,
    };
  }

  areRequiredFieldsEmpty = () => {
    const { status } = this.state;
    return !status;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const status = this.state.status;
    this.props.dispatch(
      actions.updateProjectStatus(this.props.project._id, status)
    );
    this.setState({ status: "", shouldDisableForm: true });
  };

  handleSelect = (e) => {
    const status = e.target.value;
    this.setState({
      status,
      shouldDisableForm: false,
    });
  };

  onChange = (e) => {
    const status = e.target.value;
    this.setState({
      status,
      shouldDisableForm: false,
    });
  };

  statusSelected = () => {
    const status = this.state.status;
    return status;
  };

  render() {
    const shouldDisableForm = this.state.shouldDisableForm;
    return (
      <div class="">
        <div class="">
          <form
            className="update-project-form validate-form"
            method="post"
            autoComplete="off"
            onSubmit={this.handleFormSubmit}
          >
            <Form.Group controlId="status">
              <Form.Label className="label-input100" htmlFor="project-search">
                Change Project Status
              </Form.Label>
              <Form.Control
                as="select"
                className="input100 project-status-select"
                value={this.state.status}
                onChange={this.onChange}
                onSelect={this.handleSelect}
                inputId={"project-status-select"}
                inputName="status"
                placeholder={"Update Project Status"}
              >
                <option value="" disabled>
                  Select Project Status
                </option>
                <option value="Pending">Pending</option>
                <option value="Denied">Denied</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </Form.Control>
            </Form.Group>
            <div class="container-contact100-form-btn">
              {this.props.updateProjectError ? (
                <div className="app-error-msg">
                  Sorry we could not update your project at this time. Please
                  refresh to try&nbsp;again.
                </div>
              ) : (
                <div />
              )}
              <button
                className={`contact100-form-btn ${
                  shouldDisableForm ? "" : "clickable"
                }`}
                disabled={this.state.shouldDisableForm}
              >
                <span>Update Status</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
  updateProjectError: state.project.updateProjectErrorStatus,
  updateProjectSuccess: state.project.updateProjectSuccessStatus,
});

export default connect(mapStateToProps)(changeStatusForm);
