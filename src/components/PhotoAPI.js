import React from 'react';

class PhotoAPI {
  render() {
    return(
      function JavaScriptFetch() {
      const script = document.createElement('script');
      script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
      document.querySelector('head').appendChild(script);
      },
      function jsonFlickrFeed(data) {
      let image = "";
      data.items.forEach(function (element) {
      image += "<img src=\"" + element.media.m + "\"/>";
      });
      document.querySelector("thumbnail").innerHTML = image;
      }
    )
  }
}

export default PhotoAPI;