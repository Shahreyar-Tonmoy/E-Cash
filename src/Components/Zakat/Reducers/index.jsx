// reducers/index.js
import { combineReducers } from 'redux';
import zakatReducer from '../Actions/zakatActions';


const rootReducer = combineReducers({
  zakat: zakatReducer,
});

export default rootReducer;
