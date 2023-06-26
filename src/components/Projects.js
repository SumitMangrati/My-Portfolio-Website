import React from 'react'
import car from '../assets/car.png'
import food from '../assets/Foods.png'
import port from '../assets/portfolio.png'
import '../styles/Project.css'
import {Link} from "react-router-dom"

function Projects() {

    const newTab=URL=>{
        window.open(URL)
      }


  return (
    <>
    <div id="projects">
    <div className="project-container">
        <h2>Featured Projects</h2>
        <div className="project-wrapper">


            <div className="car-project">
                <div className="image-holder">
                    <img src={car} alt="" srcset="" />
                </div>
                <div className="text-holder1">
                    <div className="project-title">
                        Car Rental
                    </div>
                    <div className="project-about">
                    A car rental website is a platform which allows user to view amongst the various available luxory cars and to rent them for personal or buisness use.
                    </div>
                    <Link className='gitLink' onClick={()=>newTab('https://github.com/SumitMangrati/Car-Retal-Website.git')}>Github</Link>
                </div>
            </div>



            <div className="Port-project">
                <div className="text-holder2">
                <div className="project-title">
                        Sumit.dev
                    </div>
                    <div className="project-about">
                    My Portfolio Website that showcases the briefs about me and showcases my various projects
                    </div>
                    <Link className='gitLink' onClick={()=>newTab("https://github.com/SumitMangrati/My-Portfolio-Website.git")}>Github</Link>
                </div>
                <div className="image-holder-2">
                    <img src={port} alt="" srcset="" />
                </div>
            </div>

            <div className="Food-project">
                <div className="image-holder">
                    <img src={food} alt="" srcset="" />
                </div>
                <div className="text-holder1">
                    <div className="project-title">
                        Foods
                    </div>
                    <div className="project-about">
                    Foods is an frontEnd design of a Food Website from a internet inspired UI
                    </div>
                    <Link className='gitLink' onClick={()=>newTab("https://github.com/SumitMangrati/Food-Webisite.git")}>Github</Link>
                </div>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Projects
