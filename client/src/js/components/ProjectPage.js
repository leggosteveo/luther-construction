import React from "react";
import PropTypes from "prop-types";
import ChangeStatusForm from "./ChangeStatusForm";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import ForwardIcon from "@mui/icons-material/Forward";

const ProfilePage = ({ project, updateProjectErrorStatus, admin }) => {
  const history = useHistory();
  return (
    <div className="projects-page">
      <div id="back-button">
        <ForwardIcon onClick={() => history.goBack()} />

        <span onClick={() => history.goBack()}>BACK TO PROFILE</span>
      </div>
      <div className="project-details">
        <h1 className="project-title">{project.projectID}</h1>
        <div className="project">
          <span className="project-key">CREATED:</span>
          <span>{project.created.toDateString()}</span>
          <br />
          <span className="project-key">BUDGET:</span>
          <span>{`${project.projectBudget}`}</span>
          <br />
          <span className="project-key">TIME-FRAME:</span>
          <span>{`${project.projectTimeFrame}`}</span>
          <br />
          <span className="project-key">STATUS:</span>
          <span>{`${project.status}`}</span>
          <br />
          <span className="project-key">NOTES:</span>
          <span>{project.projectMessage}</span>

          <br />
        </div>
        {admin && (
          <ChangeStatusForm
            project={project._id}
            updateProjectErrorStatus={updateProjectErrorStatus}
          />
        )}
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  updateProjectErrorStatus: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProfilePage;
