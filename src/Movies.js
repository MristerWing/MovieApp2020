import React from 'react';
import PropTypes from 'prop-types';

const Movies = ({ id, year, title, summary, poster }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

Movies.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
};

export default Movies;
