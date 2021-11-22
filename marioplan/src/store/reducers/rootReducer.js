import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// this is combining authReducer.js with projectReducer.js
const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
