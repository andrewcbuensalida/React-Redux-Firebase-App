export const createProject = (project) => {
	return (dispatch, getState) => {
		// pause dispatch and make async call
		// dispatch takes in the action
		dispatch({ type: "CREATE_PROJECT", project });
	};
};
