import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProfilePage from "./ProfilePage";
import ProjectsList from "./ProjectsList";
import NoProjects from "./NoProjects";

export class ProfilePageContainer extends Component {
  componentDidMount() {
    document.querySelector("head > title").innerHTML =
      "My Projects | LUTHER CONSTRUCTION";
    this.props.dispatch(actions.cleanAuth());
    this.props.dispatch(actions.getProjects());
  }

  render() {
    const projectsArr = this.props.myProjects.sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    );
    let projectsDisplay;
    if (projectsArr.length > 0) {
      projectsDisplay = <ProjectsList projects={projectsArr} />;
    } else {
      projectsDisplay = <NoProjects />;
    }

    return (
      <ProfilePage
        loadingStatus={this.props.loadingStatus}
        myProjects={projectsDisplay}
        projectsErrorStatus={this.props.projectsErrorStatus}
        addProjectErrorStatus={this.props.addProjectErrorStatus}
        deleteProjectErrorStatus={this.props.deleteProjectErrorStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loadingStatus: state.profile.projectsLoadingStatus,
  myProjects: state.profile.myProjects,
  projectsErrorStatus: state.profile.projectsErrorStatus,
  addProjectErrorStatus: state.profile.addProjectErrorStatus,
  deleteProjectErrorStatus: state.profile.deleteProjectErrorStatus,
});

export default connect(mapStateToProps)(ProfilePageContainer);
