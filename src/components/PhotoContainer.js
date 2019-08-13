import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          {/* Not Found  --  to be STATE */}
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;