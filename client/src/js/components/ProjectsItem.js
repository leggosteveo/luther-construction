import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import SVGDelete from "./SVGDelete";

export class ProjectsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogStatus: false,
    };
  }

  deleteDialogChange = (e) => {
    e.preventDefault();
    this.setState({
      deleteDialogStatus: !this.state.deleteDialogStatus,
    });
  };

  deleteDialogClose = (e) => {
    e.preventDefault();
    this.setState({
      deleteDialogStatus: false,
    });
  };

  confirmDelete = (e) => {
    e.preventDefault();
    const projectDeleteID = this.props.projectInfo._id;
    this.props.dispatch(actions.deleteProject(projectDeleteID));
  };

  render() {
    const projectInfo = this.props.projectInfo;
    return (
      <div>
        <div className="project-info">
          <h2 className="project-list-title">
            <Link to={`/projects/${projectInfo._id}`} className="project-name">
              {projectInfo.projectID}
            </Link>
          </h2>
          <div className="project-delete-button">
            <div className="project-list-delete">
              <button
                type="submit"
                name="x-btn"
                onClick={this.deleteDialogChange}
              >
                <SVGDelete />
                <span className="visually-hidden">
                  Delete {projectInfo.projectName}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="delete-project-warning"
          hidden={!this.state.deleteDialogStatus}
        >
          <h3>Delete {projectInfo.projectName}?</h3>
          <p>
            Deleting a location will permanently remove it from your checklist
            and you will lose your visited brewery&nbsp;record.
          </p>
          <div className="delete-project">
            <button
              className="keep-project-btn"
              type="button"
              name="keep-btn"
              onClick={this.deleteDialogClose}
            >
              No, Keep {projectInfo.projectName}
            </button>{" "}
            <button
              className="delete-project-btn"
              type="button"
              name="remove-btn"
              onClick={this.confirmDelete}
            >
              <SVGDelete />
              &nbsp;Yes, Delete {projectInfo.projectName}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProjectsItem);
