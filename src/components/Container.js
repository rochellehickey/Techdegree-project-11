import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

class Container extends Component {
  render() {
    return(
      <div className="container">
        <SearchForm />
        <Navigation />
        <PhotoContainer />
      </div>
    );
  };
}

export default Container;