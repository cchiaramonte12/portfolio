import React from 'react';
import './topbar.scss';
import {Phone, Mail} from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className = 'wrapper'>
                <div className = 'left'>
                    <a href="#about" className="initials">CCC</a>
                    <div className = 'itemContainer'>
                        <Phone className='icon'/>
                        <span className='leftSpan'>+1(301)377-2549</span>
                    </div>
                    <div className = 'itemContainer'>
                        <Mail className='icon'/>
                        <span className='leftSpan'>cchiaramonte12@gmail.com</span>
                    </div>
                </div>
                <div className = 'right'>
                    <div className = 'hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}