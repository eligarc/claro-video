import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Header.sass';

const Header = () => {
	return (
		<div className="Header">
			<h1 className="Header-title">
				<Link to="/">Claro video</Link>
			</h1>
			<div className="Header-checkout">
			<Link to="/checkout">
				<i className="fa-solid fa-cart-shopping"></i>
			</Link>
			</div>
		</div>
	);
}

export default Header;