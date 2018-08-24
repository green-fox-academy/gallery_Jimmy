import { connect } from 'react-redux';
import Thumbnail from '../../component/Thumbnail';
import { select } from '../../action/action';

const mapStateToProps = (state, ownProps) => ({
  text: state.index === parseInt(ownProps.index, 10) ? 'arrow display' : 'arrow',
  text1: 'preview-arrow',
  text2: 'thumbnails',
  index: ownProps.index,
  url: ownProps.src,
});

const mapDispatchToProps = (
  dispatch, ownProps,
) => ({
  func: () => dispatch(select(parseInt(ownProps.index, 10))),
});

const Thumbnails = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thumbnail);

export default Thumbnails;
