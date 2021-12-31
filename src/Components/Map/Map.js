import React from 'react';
import './map.scss';

export default function Map() {
    return (
        <div className = "map">
            <div className = "container">
            <img src="./assets/mapImage.jpg" />
                <div className = "mapCard">
                    <h3 className = "mapCardHeading"> Here is me</h3>
                    <p>Bethesda, Maryland, United States of America</p>
                    <a href="https://www.google.com/maps/place/Bethesda,+MD/@38.9817225,-77.1886166,12z/data=!3m1!4b1!4m5!3m4!1s0x89b7cbb76a24022d:0x26b279f76a2bcd0d!8m2!3d38.984652!4d-77.0947092" target="_blank" rel="noreferrer">
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
}