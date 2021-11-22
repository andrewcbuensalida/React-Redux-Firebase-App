import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// thunk allows for async fetch calls in between dispatcher and reducer
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./store/reducers/rootReducer";

// can have many different store enhancers like applyMiddleware. the enhancement being can now return a function inside action creator which can then interact with database
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
