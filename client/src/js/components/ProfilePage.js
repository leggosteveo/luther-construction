import React from "react";
import PropTypes from "prop-types";
import ProjectAddForm from "./ProjectAddForm";
import Loader from "./Loader";

const ProfilePage = ({
  loadingStatus,
  myProjects,
  projectsErrorStatus,
  addProjectErrorStatus,
  deleteProjectErrorStatus,
}) => (
  <div>
    <div className="profile-page">
      <main role="main">
        <h1 className="dark-background-header">My Projects</h1>
        <ProjectAddForm />
        {projectsErrorStatus ? (
          <div className="app-error-msg">
            Sorry we could not retrieve your projects at this time. Please
            refresh to try&nbsp;again.
          </div>
        ) : (
          <div />
        )}
        {addProjectErrorStatus ? (
          <div className="app-error-msg">
            Sorry we could not add your project at this time. Please
            try&nbsp;again.
          </div>
        ) : (
          <div />
        )}
        {deleteProjectErrorStatus ? (
          <div className="app-error-msg">
            Sorry we could not delete your project at this time. Please
            try&nbsp;again.
          </div>
        ) : (
          <div />
        )}
        {loadingStatus ? <Loader /> : myProjects}
      </main>
    </div>
  </div>
);

ProfilePage.propTypes = {
  loadingStatus: PropTypes.bool.isRequired,
  myProjects: PropTypes.object.isRequired,
  projectsErrorStatus: PropTypes.bool.isRequired,
  addProjectErrorStatus: PropTypes.bool.isRequired,
  deleteProjectErrorStatus: PropTypes.bool.isRequired,
};

export default ProfilePage;
