import React from 'react';

const ProjectView = ({projects}) => (
  <ul>
    {projects.map((project) =>
      <li key={project.id}>{project.name} | {project.img} | {project.lead}</li>
    )}
  </ul>
)

export default ProjectView;
