import React, { Component } from 'react';

export default class Partner extends Component {
  render() {
    return (
      <div className="w-75 mx-auto">
        <img className="partner-image" src={this.props.img} alt="sponsor" />
      </div>
    );
  }
}
