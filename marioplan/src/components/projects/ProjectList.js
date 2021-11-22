import React from "react";

const ProjectList = (props) => {
	return (
		<div className="project-list section">
			{props.projects &&
				props.projects.map((project) => (
					<div key={project.id}>
						<h1>{project.title}</h1>
						<p>{project.content}</p>
					</div>
				))}
		</div>
	);
};

export default ProjectList;
