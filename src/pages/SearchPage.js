import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
// import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
				<div className="searchPage__headerBody">
					<Search hideButtons />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/shopping">Shopping</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/maps">Maps</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>
						</div>
						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* {true && (
				<div className="searchPage__results">
					<p className="searchPage__resultCount">
						About {data?.searchInformation.formattedTotalResults} results(
						{data?.searchInformation.formattedSearchTime} seconds) for {term}
					</p>
					{data?.items.map((item) => (
						<div className="searchPage__result">
							<a href={item.link}>{item.displayLink}▽</a>
						</div>
					))}
				</div>
			)} */}
		</div>
	);
}

export default SearchPage;
