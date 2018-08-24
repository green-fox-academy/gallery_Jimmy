import { connect } from 'react-redux';
import { rightMove } from '../../action/action';
import Button from '../../component/Button';

const mapStateToProps = () => ({ text: 'move right' });

const mapDispatchToProps = dispatch => ({ func: () => dispatch(rightMove()) });

const RightButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default RightButton;
