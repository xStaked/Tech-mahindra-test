import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from '../../components/Table';
import '../../styles/dashboard.css';
import {
	searchEntryMonthProperty,
	searchSexTypeProperty,
	sortObject,
} from '../../utils/sorting';
export const Dashboard = () => {
	const { users } = useSelector((state) => state.dashboard);
	const [filterAsc, setFilterAsc] = useState(false);

	let usersCopy = users && [...users];
	const months = searchEntryMonthProperty(usersCopy);
	const sexType = searchSexTypeProperty(usersCopy);
	let countMothsCopy = { ...months };
	const sortable = sortObject(countMothsCopy);

	const handleSort = () => {
		setFilterAsc(!filterAsc);
	};

	return (
		<main className='container'>
			<h1>Dashboard</h1>
			<aside className='d-flex my-3'>
				<div className='dashboard__card mr-3'>
					<article className='dashboard__card--sex'>
						<h1>{users?.length}</h1>
						<span>All Users</span>
					</article>
				</div>
				<div className='dashboard__card '>
					<article className='dashboard__card--sex border-right'>
						<h1>{sexType?.male}</h1>
						<span> Male </span>
					</article>
					<article className='dashboard__card--sex'>
						<h1>{sexType?.female}</h1>
						<span> Female </span>
					</article>
				</div>
			</aside>
			<div>
				<h3> Entry users by month </h3>
				<Table
					thOptions={['Month', 'Quantity persons']}
					handleSort={handleSort}
				>
					{!filterAsc
						? Object.keys(months).map((key, ind) => (
								<tr key={ind}>
									<td>{key}</td>
									<td>{months[key]} persons</td>
								</tr>
						  ))
						: sortable.map((key, ind) => (
								<tr key={ind}>
									<td>{key[0]}</td>
									<td>{key[1]} persons</td>
								</tr>
						  ))}
				</Table>
			</div>
		</main>
	);
};
