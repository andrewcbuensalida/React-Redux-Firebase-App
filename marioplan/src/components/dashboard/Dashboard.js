import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						{/* this.props.projects comes from connect hoc on bottom */}
						<ProjectList projects={this.props.projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

// state comes from Provider store={store} in index.js
const mapStateToProps = (state) => {
	return {
		projects: state.project.projects,
	};
};
// connect returns a wrapper function to turn Dashboard into a higher order component. This allows Dashboard to get projects from this.props.projects
export default connect(mapStateToProps)(Dashboard);
