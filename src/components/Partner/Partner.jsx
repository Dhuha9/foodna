import React, { Component } from 'react'

export default class Partner extends Component {
    render() {
        return (
            <div>
                <img className="partner-image" src={this.props.img} alt="sponsor"/>
            </div>
        )
    }
}
