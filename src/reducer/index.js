import { combineReducers } from 'redux';
import changeIndex from './indexReducer';

const rootReducer = combineReducers({
  index: changeIndex,
});

export default rootReducer;
