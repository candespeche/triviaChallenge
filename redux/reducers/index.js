import {combineReducers} from 'redux';
import quiz from './quiz';
import loading from './loading';

export default combineReducers({
  quiz,
  loading,
});
