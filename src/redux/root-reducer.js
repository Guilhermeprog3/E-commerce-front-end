import { combineReducers } from "redux";
import reducer from './cart/slice.js'

const rootReducers = combineReducers([reducer]);

export default rootReducers;