import React from "react";
import PropTypes from "prop-types";
import ProjectAddForm from "./ProjectAddForm";
import Loader from "./Loader";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const ProfilePage = ({
  addingProject,
  loadingStatus,
  myProjects,
  projectsErrorStatus,
  addProjectErrorStatus,
  deleteProjectErrorStatus,
  handleClick,
}) => (
  <div>
    <div className="profile-page">
      <main role="main">
        <div className="title-with-button">
          <h1 className="dark-background-header main-title">My Projects</h1>
          <div>
            <span className="dark-background-header" onClick={handleClick}>
              ADD PROJECT
            </span>
            {!addingProject ? (
              <AddIcon sx={{ color: "#fff" }} onClick={handleClick} />
            ) : (
              <CloseIcon sx={{ color: "#fff" }} onClick={handleClick} />
            )}
          </div>
        </div>
        <div>
          {addingProject ? (
            <ProjectAddForm addingProject={handleClick} />
          ) : (
            <div />
          )}

          {loadingStatus ? <Loader /> : myProjects}
        </div>
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
