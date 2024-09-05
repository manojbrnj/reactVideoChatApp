import {combineReducers} from 'redux';
import CallStatusReducer from '../../components/CallStatusReducer';
import streamReducer from './streamReducer';
const rootReducer = combineReducers({
  callStatus: CallStatusReducer,
  streamState: streamReducer,
});
export default rootReducer;
