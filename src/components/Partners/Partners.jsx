import React, { Component } from 'react'
import Partner from "../Partner/Partner"
import partnerData from '../../partner.json'

export default class Partners extends Component {
    render() {
        return (
            <div className="partners-section">
                <p className="partners-title">Who Works With Us?</p>
                <div className="partners-grid">
                    {partnerData.map((partners)=>{
                        return <Partner img={partners.img}/>
                    })}
                </div>
            </div>
        )
    }
}
