import React from 'react';
import {Link} from "react-router-dom";

function ProjectItem(image,name,github,about) {
  
  const newTab=URL=>{
    window.open(URL)
  }

  return (
    <div className='projectItem'>
        <div className="project-image">
        <div style={{backgroundImage:`url(${image})`}}></div>
        </div>
        <div className="project-text">
            <p>{name}</p>
            <p>{about}</p>
            <Link onClick={()=>newTab({github})}>Github</Link>
        </div>
    </div>
  )
}

export default ProjectItem
