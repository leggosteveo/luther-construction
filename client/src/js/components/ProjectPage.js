import React from "react";
import PropTypes from "prop-types";
import ChangeStatusForm from "./ChangeStatusForm";

const ProfilePage = ({ project, updateProjectErrorStatus, admin }) => (
  <div>
    <div className="projects-page">
      <main role="main">
        <div className="project-details">
          <h1 className="project-title">{project.projectID}</h1>
          <h2>
            PROJECT ID: <span>{project._id}</span>
          </h2>
          <h2>
            CREATED: <span>{project.created.toDateString()}</span>
          </h2>
          <h2>
            BUDGET: <span>{`${project.projectBudget}`}</span>
          </h2>
          <h2>
            TIME-FRAME: <span>{`${project.projectTimeFrame}`}</span>
          </h2>
          <h2>
            STATUS: <span>{`${project.status}`}</span>
          </h2>
          <h2>
            NOTES: <span>{project.projectMessage}</span>
          </h2>
          {admin && (
            <ChangeStatusForm
              project={project._id}
              updateProjectErrorStatus={updateProjectErrorStatus}
            />
          )}
        </div>
      </main>
    </div>
  </div>
);

ProfilePage.propTypes = {
  updateProjectErrorStatus: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProfilePage;
