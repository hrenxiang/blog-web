// rootReducer.js
import { combineReducers } from 'redux';
import blogParameterReducer from './blogParameterReducer';

const rootReducer = combineReducers({
    blogParameterReducer,
    // 其他reducer
});

export default rootReducer;
