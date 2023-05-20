import React from 'react';
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';

function Search() {
	return (
		<div>
			<div className="search">
				<div className="search__input">
					<SearchSharpIcon className="search__inputIcon" />
					<input />
					<MicSharpIcon />
				</div>
			</div>
		</div>
	);
}

export default Search;
