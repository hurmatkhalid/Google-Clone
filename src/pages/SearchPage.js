import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();

	//Live api call
	// const { data } = useGoogleSearch(term);
	const data = Response; //here we are mocking the api call instead of above line
	console.log(data);
	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
					<img
						className="searchPage_logo"
						src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
						alt=""
					/>
				</Link>
			</div>
			<div className="searchPage__results"></div>
		</div>
	);
}

export default SearchPage;
