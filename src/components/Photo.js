import React from 'react';

/* IMG takes URL prop constructed from PhotoContainer.js */
const Photo = props => (
  <li className="thumbnails">
    <img src={props.url} alt="" />
  </li>
);

export default Photo;