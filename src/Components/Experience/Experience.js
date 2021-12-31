import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import "./experience.scss";
import {useState} from 'react';

export default function Experience() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            icon: "./assets/Brave_logo_type.png",
            title: "Product Design Engineer",
            desc: "1. Directed engineering on product design team at Brave, a company that specializes in motion capture sensor suits for athletes that prevent injuries and increase performance -- \
            2. Designed and developed 20+ iterations of a wearable capsule for the system’s battery and motherboard using AutoDesk Inventor and Ultimaker Cura to modify and create 3D prints --\
            3. Programmed with Python to model data with inverse kinematics in OpenSim, pinpoint graph points with machine learning, and handle backend AWS data analytics -----------------\
            4. Performed hands-on prototyping for original product designs by 3D printing, researching fabrics, and sewing to present to the CEO and alter the design based on their requests",
            img: './assets/bravesuit.jpg'
        },
        {
            id: 2,
            icon: "./assets/vint.png",
            title: "Product and Design Intern",
            desc: "1. Lead product design for Vint, a startup that created the most transparent platform for investing in shares of wine ---------------------\
            2. Built a data scraper in Python to sift through wine pricing data on dozens of websites to identify trends in pricing and to utilize competitive pricing analysis ---------------------\
            3. Analyzed 50+ years of data on Live-Ex, a website that provides historical pricing data, prior to the launch of three wine collections to present investors with a gauge for investment \
            4. Created a global wine market overview for investors using research of private versus public vineyards, production quantity, and the historical volatility of wine",
            img: './assets/vint.jpg'
        },
        {
            id: 3,
            icon: "./assets/bellalogo.png",
            title: "IT Office Assistant",
            desc: "1. Coordinated the transfer of patient files to a new online medical software and facilitated the creation of accounts for 20,000+ patients -----------------\
            2. Developed a seamless process to expedite the process of scanning patient files and directly creating their accounts -------------------------------\
            3. Aided in the financial accounting of the business by using proficiency in Microsoft Excel to translate to QuickBooks ---------------------------\
            4. Assisted in the organization of the flow and scheduling of patients in the office during COVID-19 to improve efficiency and safety of the practice",
            img: './assets/bella.jpg'
        }
    ]

    const handleClick = (direction) => {
        direction === 'left' ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="experience" id="experience">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(
                <div className="container">
                    <div className='item'>
                        <div className='left'>
                            <div className='leftContainer'>
                            <h1>Work Experience</h1>
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className='arrow left' onClick = {() => handleClick("left")}><ChevronLeft/></div>
            <div className='arrow right' onClick = {() => handleClick("right")}><ChevronRight/></div>
        </div>
    );
}