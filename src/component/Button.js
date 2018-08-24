import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { func, text } = props;
  return <button type="button" onClick={func} className={text} />;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Button;
