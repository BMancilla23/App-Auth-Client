import './Header.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ }) => {

	const [open, setOpen] = useState(false)
	const Links = [
		{
			name: "Home",
			path: "/"
		},
		{
			name: "About",
			path: "/about"
		},
		{
			name: "Sign In",
			path: "/sign-in"
		}
	]

	const toggleMenu = () => {
		setOpen(!open)
	}

	return (
		<header className='bg-gray-900 sticky text-white py-4 px-10'>
			<div className='flex justify-between mx-auto items-center'>
				<h1 className='text-2xl font-bold'>Auth <span className='text-rose-700'>App</span></h1>
				<div className="hidden md:flex">
					<ul className='flex'>
						{
							Links.map((link) => (
								<li key={link.name}>
									<NavLink  className= 'mx-4 transitio duration-300'  to={link.path}>{link.name}</NavLink>
								</li>
							))
						}

					</ul>
				</div>
				<button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white focus:outline-none">
                    {open ? (
                        <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                            <path fillRule="evenodd" d="M19.354 4.646a.5.5 0 010 .708l-3.182 3.182 3.182 3.182a.5.5 0 01-.708.708L15.464 9.95l-3.182 3.182a.5.5 0 01-.708-.708l3.182-3.182-3.182-3.182a.5.5 0 01.708-.708L15.464 8.534l3.182-3.182a.5.5 0 01.708 0z"></path>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            <path fillRule="evenodd" d="M3 6h18V5H3v1zm0 6h18v-1H3v1zm0 6h18v-1H3v1z"></path>
                        </svg>
                    )}
                </button>

			</div>
			{
				open && (
					<div className="md:hidden fixed left-0 flex justify-center items-center w-full h-screen bg-gray-900 ">
						
						<ul className='flex flex-col items-center text-center'>
							{
								Links.map((link) => (
									<li className='mb-8' key={link.name}>
										<NavLink  className='mx-4  transition duration-300' onClick={toggleMenu}  to={link.path}>{link.name}</NavLink>
									</li>
								))
							}

						</ul>
					</div>
				)
			}
		</header>
	);
};

Header.propTypes = {};

export default Header;