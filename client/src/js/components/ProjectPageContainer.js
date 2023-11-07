import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProjectPage from "./ProjectPage";
import Auth from "../components/modules/Auth";

export class ProjectPageContainer extends Component {
  async componentDidMount() {
    await this.props.dispatch(
      actions.getSingleProject(this.props.match.params.projectID)
    );
    document.querySelector(
      "head > title"
    ).innerHTML = `${this.props.project.projectID} | LUTHER CONSTRUCTION`;
  }

  changeStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  componentWillUnmount() {
    this.props.dispatch(actions.cleanAuth());
  }

  render() {
    const project = this.props.project;
    project.created = new Date(this.props.project.created);
    const availableOptions = ["Pending", "Denied", "In progress", "Complete"];
    const options = availableOptions.filter(
      (option) => option != project.status
    );

    const userRole = Auth.getUserRole();
    let admin;
    if (userRole === "admin") {
      admin = true;
    } else {
      admin = false;
    }

    return (
      <ProjectPage
        project={project}
        updateProjectErrorStatus={this.props.updateProjectErrorStatus}
        admin={admin}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps)(ProjectPageContainer);
