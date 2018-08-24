import { connect } from 'react-redux';
import Display from '../../component/Display';

const mapStateToProps = (state, ownProps) => ({
  text1: 'img-container',
  text2: 'full-image',
  text3: 'description',
  text4: ownProps.title[state.index],
  text5: ownProps.descibe[state.index],
  url: ownProps.src[state.index],
});

const MainDisplay = connect(
  mapStateToProps,
)(Display);

export default MainDisplay;
