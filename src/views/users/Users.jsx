import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from '../../components/Table';

import '../../styles/users.css';

export const Users = () => {
	const { users } = useSelector((state) => state.dashboard);
	const [filterAsc, setFilterAsc] = useState();

	let usersData = users && [...users];

	const handleSort = () => {
		setFilterAsc(!filterAsc);
	};

	const sortAsc = usersData?.sort((a, b) =>
		b.userName.localeCompare(a.userName)
	);

	return (
		<main className='container'>
			<h1>Dashboard</h1>
			<Table
				thOptions={['UserName', 'First Name', 'Last Name']}
				handleSort={handleSort}
			>
				{filterAsc
					? sortAsc?.map((user, ind) => {
							return (
								<tr key={ind}>
									<td>{user.userName}</td>
									<td>{user.profile.firstName}</td>
									<td>{user.profile.lastName}</td>
								</tr>
							);
					  })
					: users?.map((user, ind) => {
							return (
								<tr key={ind}>
									<td>{user.userName}</td>
									<td>{user.profile.firstName}</td>
									<td>{user.profile.lastName}</td>
								</tr>
							);
					  })}
			</Table>
		</main>
	);
};
