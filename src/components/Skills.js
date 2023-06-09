import React from 'react'
import { skillList } from '../helper/skillList'
import SkillItem from './SkillItem'
import "../styles/Skills.css"

function Skills() {
  return (
    <>
    <div className="skills-container">
      <div className="skill-text">
      <h2>Tech Stock</h2>
      </div>
        <div className="skillList-wrapper">
        {skillList.map((skillItem, key) => {
          return (
            <SkillItem
              key={key}
              image={skillItem.image}
            />
          );
        })}
        </div>
    </div>
    </>
  )
}

export default Skills

