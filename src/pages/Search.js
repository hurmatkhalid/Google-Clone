import React, { useState } from 'react';
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
	// eslint-disable-next-line no-empty-pattern
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState(''); //this is state, thats how we write variables
	const navigate = useNavigate();

	const search = (e) => {
		e.preventDefault(); //this so it prevents refresh

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		});

		navigate('/search');
	};

	return (
		<form className="search">
			{/*we used form instead of div, and then in button do type='submit' it will make your enter key submit the input hehe */}
			<div className="search__input">
				<SearchSharpIcon className="search__inputIcon" />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicSharpIcon />
			</div>
			{!hideButtons ? (
				<div className="search__buttons">
					<Button type="submit" onClick={search} variant="outlined">
						Google Search
					</Button>
					<Button variant="outlined">I'm feeling lucky</Button>
				</div>
			) : (
				<div className="search__buttons">
					<Button
						className="search__buttonsHidden"
						type="submit"
						onClick={search}
						variant="outlined">
						Google Search
					</Button>
					<Button className="search__buttonsHidden" variant="outlined">
						I'm feeling lucky
					</Button>
				</div>
			)}
		</form>
	);
}

export default Search;
