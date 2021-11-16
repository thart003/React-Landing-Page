import React from "react";

export const Jumbotron = props => {
	return (
		<div className="jumbotron container p-5">
			<h1 className="display-4">Trees!</h1>
			<p className="lead">
				Trees make things around them more beautiful. They increase
				visual pleasure.
			</p>

			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
};
