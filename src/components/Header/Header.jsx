"use client";
import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ }) => {
	return (
		<div className='bg-gray-900 text-white py-4 px-10'>
			<div className='flex justify-between mx-auto items-center'>
				<h1 className='text-2xl font-bold'>Authn App</h1>
				<div className="hidden md:flex">
					<ul className='flex'>
						<li>
							<NavLink aria-current="page" className="mx-4 hover:text-gray-300 transition duration-300" to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink className="mx-4 hover:text-gray-300 transition duration-300" to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink className="mx-4 hover:text-gray-300 transition duration-300" to='/sign-in'>Sign In</NavLink>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					<button className="text-gray-300 hover:text-white focus:outline-none">
						<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
							<path fillRule="evenodd" d="M3 6h18V5H3v1zm0 6h18v-1H3v1zm0 6h18v-1H3v1z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;