import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ children, thOptions, handleSort }) => {
	return (
		<table className='customers'>
			<thead>
				{thOptions.map((th, ind) => (
					<th key={ind} className='th--item'>
						{th}{' '}
						{ind === 0 ? (
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								onClick={handleSort}
								className="sort-icon"
							>
								<path
									d='M8.5 9L12.5 5L16.5 9M16.5 15L12.5 19L8.5 15'
									stroke='#fff'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						) : null}
					</th>
				))}
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};

Table.propTypes = {
	children: PropTypes.node,
	thOptions: PropTypes.array,
	handleSort: PropTypes.func,
};
