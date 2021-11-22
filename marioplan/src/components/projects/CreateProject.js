import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
	state = {
		title: "",
		content: "",
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		// this is from the HOC on the bottom. this.state is the new project
		this.props.createProject(this.state);
	};
	render() {
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">
						Create a New Project
					</h5>
					<div className="input-field">
						<input
							type="text"
							id="title"
							onChange={this.handleChange}
						/>
						<label htmlFor="title">Project Title</label>
					</div>
					<div className="input-field">
						<textarea
							id="content"
							className="materialize-textarea"
							onChange={this.handleChange}
						></textarea>
						<label htmlFor="content">Project Content</label>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

// this adds createProject method to the props of CreateProject component
const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project)),
	};
};
// this allows CreateProject component to have
export default connect(null, mapDispatchToProps)(CreateProject);
