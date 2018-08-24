import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const {
    text1, text2, text3, text4, text5, url,
  } = props;
  return (
    <div className={text1}>
      <img className={text2} src={url} alt="" />
      <div className={text3}>
        <h1>{text4}</h1>
        <p>{text5}</p>
      </div>
    </div>);
}

Display.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  text5: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Display;
