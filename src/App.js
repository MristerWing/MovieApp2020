import Axios from 'axios';
import React, { Component } from 'react';
import Movies from './Movies';

class App extends Component {
	state = {
		isLoding: true,
		movies: [],
	};

	getMovie = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await Axios.get(
			'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
		);

		console.log(movies);
		this.setState(() => ({ movies, isLoding: false }));
	};

	componentDidMount() {
		this.getMovie();
	}

	render() {
		const { isLoding, movies } = this.state;
		return (
			<div>
				<h1>
					{isLoding
						? 'Loding...'
						: movies.map(
								(
									{
										id,
										year,
										title,
										summary,
										medium_cover_image,
									},
									key
								) => (
									<Movies
										key={key}
										id={id}
										year={year}
										title={title}
										summary={summary}
										poster={medium_cover_image}
									></Movies>
								)
						  )}
				</h1>
			</div>
		);
	}
}

export default App;
