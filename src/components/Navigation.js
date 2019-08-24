import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

class Navigation extends Component {

  /* Push search term to the URL bar */
  handleRoute = (query) => {
    this.props.history.push(`/search/${query}`);
  }

  render() {
    /* onSearch call handleRoute function */
    return(
      <nav className="main-nav">
        <SearchForm onSearch={this.handleRoute} />
        <ul>
          <li><NavLink to="/search/bears">Bears</NavLink></li>
          <li><NavLink to="/search/beets">Beets</NavLink></li>
          <li><NavLink to="/search/battlestar-galactica">Battlestar Galactica</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navigation);