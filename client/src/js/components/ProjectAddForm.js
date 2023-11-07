import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Form from "react-bootstrap/Form";

export class projectAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        budget: "",
        message: "",
        name: "",
        timeFrame: "",
      },
      shouldDisableForm: true,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  areRequiredFieldsEmpty = () => {
    const { budget, name, timeFrame } = this.state.project;
    return !budget || !name || !timeFrame;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const project = this.state.project;
    this.props.dispatch(actions.addProject(project));
    this.setState({
      project: {
        budget: "",
        message: "",
        name: "",
        timeFrame: "",
      },
      shouldDisableForm: true,
    });
    this.props.dispatch(actions.addingProject());
  };

  handleSelect = (e) => {
    const field = e.target.name;
    const project = this.state.project;
    project[field] = e.target.value;
    this.setState({
      project,
    });
  };

  onChange = (e) => {
    const field = e.target.id || e.target.name;
    const project = this.state.project;
    project[field] = e.target.value;
    this.setState({
      project,
    });
    this.setState({
      shouldDisableForm: this.areRequiredFieldsEmpty(),
    });
  };

  render() {
    const shouldDisableForm = this.state.shouldDisableForm;
    return (
      <section className="project-add">
        <div>
          <form
            className="add-project-form"
            method="post"
            autoComplete="off"
            onSubmit={this.handleFormSubmit}
          >
            <span class="contact100-form-title">Submit A New Project</span>

            <div className="add-project-form-content">
              <div>
                <div
                  class="wrap-input100 validate-input "
                  data-validate="Type of Project"
                >
                  <Form.Group controlId="name">
                    <Form.Label
                      className="label-input100"
                      htmlFor="project-search"
                    >
                      Type of Project
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="input100"
                      value={this.state.project.name}
                      onChange={this.onChange}
                      onSelect={this.handleSelect}
                      inputId={"project-select"}
                      inputName="name"
                      placeholder={"Select Type of Project"}
                    >
                      <option value="" disabled>
                        Select Type of Project
                      </option>
                      <option value="New Room">New Room</option>
                      <option value="New Deck">New Deck</option>
                      <option value="Appliance Installation">
                        Appliance Installation
                      </option>
                      <option value="Demolition">Demolition</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div
                  class="wrap-input100 validate-input "
                  data-validate="Project Budget"
                >
                  <Form.Group controlId="budget">
                    <Form.Label
                      className="label-input100"
                      htmlFor="project-search"
                    >
                      Project Budget
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="input100"
                      value={this.state.project.budget}
                      onChange={this.onChange}
                      onSelect={this.handleSelect}
                      inputId={"project-budget"}
                      inputName="budget"
                      placeholder={"Select Project Budget"}
                    >
                      <option value="" disabled>
                        Select Project Budget
                      </option>
                      <option value="$100 - $200">$100 - $200</option>
                      <option value="$201 - $500">$201 - $500</option>
                      <option value="$501 - $1000">$501 - $1000</option>
                      <option value="$1001 +">$1001 +</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div
                  class="wrap-input100 validate-input "
                  data-validate="Project Timeline"
                >
                  <Form.Group controlId="timeFrame">
                    <Form.Label
                      className="label-input100"
                      htmlFor="project-search"
                    >
                      Project Time Frame
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="input100"
                      value={this.state.project.timeFrame}
                      onChange={this.onChange}
                      onSelect={this.handleSelect}
                      inputId={"project-time-frame"}
                      inputName="timeFrame"
                      placeholder={"Select Project Time Frame"}
                    >
                      <option value="" disabled>
                        Select Project Time Frame
                      </option>
                      <option value="< 1 Week">{"< 1 Week"}</option>
                      <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                      <option value="2 Weeks - Month">2 Weeks - Month</option>
                      <option value="1 Month +">1 Month +</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div
                className="input-border wrap-input100 validate-input bg0 rs1-alert-validate"
                data-validate="Please Type Your Message"
              >
                <Form.Group controlId="message">
                  <Form.Label
                    className="label-input100"
                    htmlFor="project-search"
                  >
                    Message
                  </Form.Label>
                  <textarea
                    name="message"
                    className="input100"
                    value={this.state.project.message}
                    onChange={this.onChange}
                    inputId={"project-message"}
                    inputName="message"
                    placeholder={"Enter message about project"}
                  ></textarea>
                </Form.Group>
              </div>
            </div>

            <div class="container-contact100-form-btn">
              <button
                className={`contact100-form-btn ${
                  shouldDisableForm ? "" : "clickable"
                } col-sm-6`}
                disabled={this.state.shouldDisableForm}
              >
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect()(projectAddForm);
