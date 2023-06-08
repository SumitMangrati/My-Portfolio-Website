import React from 'react'
import { projectList } from '../helper/projectList'
import ProjectItem from '../components/ProjectItem'



function Projects() {
  return (
    <>
    <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project-list-wrapper">
        {projectList.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              name={projectItem.name}
              image={projectItem.image}
              about={projectItem.about}
              github={projectItem.github}
            />
          );
        })}
        </div>
    </div>
    </>
  )
}

export default Projects
