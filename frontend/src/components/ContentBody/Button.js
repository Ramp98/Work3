import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, customClasses,iconClasses }) => {
  const buttonClasses = `button ${customClasses}`;
  const fontClasses = `button ${iconClasses}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <i className={fontClasses}></i>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  customClasses: PropTypes.string,
};

Button.defaultProps = {
  customClasses: '',
};

export default Button;