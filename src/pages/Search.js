import React, { useState } from 'react';
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { Button } from '@mui/material';

function Search() {
	const [input, setInput] = useState(''); //this is state, thats how we write variables
	const search = (e) => {
		e.preventDefault(); //this so it prevents refresh
		console.log('Hello');
	};
	return (
		<form className="search">
			{' '}
			{/*we used form instead of div, and then in button do type='submit' it will make your enter key submit the input hehe */}
			<div className="search__input">
				<SearchSharpIcon className="search__inputIcon" />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicSharpIcon />
			</div>
			<div className="search__buttons">
				<Button type="submit" onClick={search} variant="outlined">
					Google Search
				</Button>
				<Button variant="outlined">Google Search</Button>
			</div>
		</form>
	);
}

export default Search;
