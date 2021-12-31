import React, { useEffect, useRef } from 'react';
import './about.scss';
import {KeyboardArrowDown} from '@material-ui/icons';
import {init} from 'ityped';

export default function About() {

    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { showCursor: true,
            typeSpeed: 50,
            backSpeed: 25,
            cursorChar: "|",
            strings: ['Mechanical Engineer', 'Programmer', 'Designer']})
    }, [])
    return (
        <div className="about" id='about'>
            <div className="left">
                <div className = "imgContainer">
                    <img src = "assets/Cameron Chiaramonte (2).jpg" alt="Headshot"/>
                </div>
            </div>
            <div className="right">
                <div className = 'wrapper'>
                    <h2>Hi there, I am</h2>
                    <h1>Cameron Chiaramonte</h1>
                    <h3>Aspiring <span ref={textRef}></span></h3>
                </div>
                <a href = "#portfolio">
                    <KeyboardArrowDown className="arrow"/>
                </a>
            </div>
        </div>
    )
}