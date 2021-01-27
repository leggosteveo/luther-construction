import React from "react";
import PropTypes from "prop-types";
import ProjectsItem from "./ProjectsItem";

const ProjectsList = ({ projects }) => (
  <section className="projects-list">
    <div>
      {projects.map((project, index) => (
        
          <ProjectsItem key={index} projectInfo={project} />
        
      ))}
    </div>
  </section>
);

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsList;
