import React from 'react';
import './skills.scss';

export default function Skills() {
    return (
        <div className = "skills" id="skills">
            <div className = "container">
                <div className = 'item'>
                    <div className = "left">
                    <h1>Skills</h1>
                        <div className = "iconsLeft">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="Java"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className="JavaScript"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" className="Python"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-plain.svg" className="Matlab"/>

                        </div>
                        <div className="iconsRight">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="ReactJS"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-plain.svg" className="Swift"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" classsName="html"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className="css"/>
                        </div>
                    </div>
                    <div className = 'right'>
                        <h1>Socials</h1>
                        <p>Click me!</p> 
                        <div className = 'icons'>
                            <a href='https://www.linkedin.com/in/cameron-chiaramonte-565b36196/' target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" className="LinkedIn" />
                            </a>
                            <a href='https://github.com/cchiaramonte12' target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="GitHub"/>              
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}