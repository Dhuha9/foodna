// Use those lines when importing this component in app.js 


// <InfoComponent color={'gray'}/>
// <InfoComponent color={'green'}/>
// <InfoComponent color={'white'}/>


import React from 'react'
import PropTypes from 'prop-types';
import './InfoComponent.css';

const theme = {
    gray:{
        class:'gray-theme',
        img:'img/info1.jpg'
    },
    green:{
        class:'green-theme',
        img:'img/info2.jpg'
    },
    white:{
        class:'white-theme',
        img:'img/info3.jpg'
    }
}

export default function InfoComponent({color}) {
    return (
        <div className={theme[color].class}>
            <div className="media" >
                <img className="info-img" src={theme[color].img} alt=""/>
            </div>
            <div className="content">
                <h2>More info about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

InfoComponent.propTypes = {
    color: PropTypes.string.isRequired
};

