import React from 'react'


function SkillItem({image,name}) {
  return (
    <>
    <div className="skillItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <p>{name}</p>
    </div>
    </>
  )
}
export default SkillItem
