import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

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
          <div className="project-name-and-delete">
            <h2 className="project-list-title">
              <Link
                to={`/projects/${projectInfo._id}`}
                className="project-name"
              >
                {projectInfo.projectID}
              </Link>
            </h2>
            <div
              className="project-delete-button"
              style={{
                display: !this.state.deleteDialogStatus ? "block" : "none",
              }}
            >
              <button
                type="submit"
                name="x-btn"
                onClick={this.deleteDialogChange}
              >
                <DeleteIcon color="error" sx={{ fontSize: 50 }} />
              </button>
            </div>
          </div>
          <div
            className="delete-project-warning"
            hidden={!this.state.deleteDialogStatus}
          >
            <span className="delete-project-text">Delete?</span>

            <div className="delete-project">
              <Button
                className="keep-project-btn btn btn-default"
                type="button"
                name="keep-btn"
                onClick={this.deleteDialogClose}
                variant="outlined"
                color="warning"
              >
                No, Keep {projectInfo.projectName}
              </Button>{" "}
              <Button
                className="delete-project-btn btn btn-default"
                color="error"
                type="button"
                name="remove-btn"
                onClick={this.confirmDelete}
                variant="contained"
              >
                &nbsp;Yes, Delete {projectInfo.projectName}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProjectsItem);
