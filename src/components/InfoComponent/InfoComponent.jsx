// Use those lines when importing this component in app.js

// <InfoComponent color={'gray'}/>
// <InfoComponent color={'green'}/>
// <InfoComponent color={'white'}/>

import React from 'react';
import './InfoComponent.css';
export default function InfoComponent({ theme, title, content, subTitle }) {
  return (
    <div className="InfoComponentStyle">
      <div className={theme.class}>
        <div className="media1">
          <img className="info-img" src={theme.img} alt="" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
          <p className="small">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
