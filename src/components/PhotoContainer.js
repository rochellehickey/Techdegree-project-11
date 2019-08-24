import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {

  const results = props.data;
  let photos;

  /* If API returns any results, return Results title and accompanying photos */
  if (results.length) {
    /* Creating photos array by constructing the URLs from API results */
    photos = results.map(photo => <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />);
    return(
      <div id="photo-container">
        <h2>Results for {props.queryFromParent}</h2>
        {photos}
      </div>
    );
  } else {
    /* If no results are return/match, display NotFound.js */
    return(
      <div id="photo-container">
        <NotFound />
      </div>
    );
  }

}

export default PhotoContainer;