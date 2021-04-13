import React from 'react'

const buttonStyle = {
    width: '240px',
    height: '60px',
    left: 'calc(50% - 240px/2 - 1px)',
    top: '256px',
    backgroundColor:'#FFB701',
    borderRadius:'5px',
    border: 'none',
    color :'#000',
    fontSize: '18px',
    fontSamily: 'roboto'
}

export default function CtaButton() {
    return (
        <div>
            <button
                className="btn btn-default"
                style={buttonStyle}>
                    Donate Now
            </button>
        </div>
    )
}