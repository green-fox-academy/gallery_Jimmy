import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail(props) {
  const {
    text, text1, text2, url, index, func,
  } = props;
  return (
    <div className={text1} onClick={func} onKeyDown={() => { }} role="button" tabIndex="0">
      <div className={text} />
      <img className={text2} src={url} index={index} alt="" />
    </div>);
}

Thumbnail.propTypes = {
  text: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Thumbnail;
