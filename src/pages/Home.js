import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Home() {
	return (
		<div className="home">
			<div className="home__header">
				<div className="home__headerLeft">
					{/* for links we will use react router 
					for avatars we will use materials ui */}

					{/*about link */}
					<Link to="/about">About</Link>
					<Link to="/store">Store</Link>
					{/*store link */}
				</div>
				<div className="home__headerRight">
					{/* gmail link*/}
					<Link to="/gmail">Gmail</Link>
					{/* images link*/}
					<Link to="/images">Images</Link>
					{/* quick tools icon*/}
					<AppsIcon />
					<AccountCircleIcon />
					{/*avatar  */}
				</div>
			</div>
			<div className="home__body"></div>
		</div>
	);
}

export default Home;
