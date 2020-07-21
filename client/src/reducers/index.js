import { combineReducers } from 'redux';
import {reducer} from '../components/Calendar/AssignBtn';

export default combineReducers({
  entry: reducer,
});
