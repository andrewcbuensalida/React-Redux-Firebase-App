const initState = {
	projects: [
		{ id: 1, title: "something title1", content: "1something content" },
		{ id: 2, title: "something title2", content: "2something content" },
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		// CREATE_PROJECT comes from actions/projectActions.js
		case "CREATE_PROJECT":
			console.log(`project created`, action);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
