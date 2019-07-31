import React from 'react';
import PropTypes from "prop-types";

const Icon = (props) => {

  Icon.propTypes = {
    isHighScore: PropTypes.bool
  };

  <svg>...className={ props.isHighScore ? 'is-high-score' : null }>
    <path ... />
    <rect ... />
  </svg>
};

export default Icon;