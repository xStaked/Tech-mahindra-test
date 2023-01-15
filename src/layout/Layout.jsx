import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/dashboard/thunk';
import '../styles/layout.css';

export const Layout = ({ children }) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);
	return (
		<div>
			<nav className='nav'>
				<ul className='nav__list'>
					<Link to='/dashboard'>
						<li
							className={` ${
								pathname === '/dashboard' && 'active'
							} nav__list--item`}
						>
							Dashboard
						</li>
					</Link>
					<Link to='/users'>
						<li
							className={` ${
								pathname === '/users' && 'active'
							} nav__list--item`}
						>
							Users
						</li>
					</Link>
				</ul>
			</nav>
			<div>{children}</div>
		</div>
	);
};
