import { connect } from 'react-redux';
import { leftMove } from '../../action/action';
import Button from '../../component/Button';

const mapStateToProps = () => ({ text: 'move left' });

const mapDispatchToProps = dispatch => ({ func: () => dispatch(leftMove()) });

const LeftButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default LeftButton;
