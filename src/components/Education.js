import React from 'react'
import '../styles/Education.css'
function Education() {
  return (
    <>
    <div className="education-container">
        <ul>
            <li>
            <div className="color-text">
                <ion-icon name="calendar-clear-outline"></ion-icon>
                2022
                </div>
                <div className="plain-text">
                    IIEST Shibpur
                </div>
            </li>
            <li>
            <div className="color-text">
                <ion-icon name="calendar-clear-outline"></ion-icon>
                2019-2021
                </div>
                <div className="plain-text">
                    St.Joseph's School North Point
                </div>
            </li>
            <li>
                <div className="color-text">
                <ion-icon name="calendar-clear-outline"></ion-icon>
                2019
                </div>
                <div className="plain-text">
                    St.Anthony's School Kurseong
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Education
