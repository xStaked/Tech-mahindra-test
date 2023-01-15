import {
	sortObject,
	searchEntryMonthProperty,
	searchSexTypeProperty,
} from '../utils/sorting';

describe('sortObject', () => {
	it('should return an array of objects sorted by value', () => {
		const data = {
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
			7: 7,
			8: 8,
			9: 9,
			10: 10,
			11: 11,
			12: 12,
		};
		const result = sortObject(data);
		expect(result).toEqual([
			['12', 12],
			['11', 11],
			['10', 10],
			['9', 9],
			['8', 8],
			['7', 7],
			['6', 6],
			['5', 5],
			['4', 4],
			['3', 3],
			['2', 2],
			['1', 1],
		]);
	});
});

describe('searchEntryMonthProperty', () => {
	it('should return an object with the number of students per month', () => {
		const data = [
			{
				id: '1',
				userName: 'Unique48',
				profile: {
					firstName: 'Dakota',
					lastName: 'Fadel',
					password: 'nzSRNAKWIMAEgZv',
					entryMonth: 'September',
					sexType: 'female',
				},
			},
			{
				id: '2',
				userName: 'Uriah_Koch',
				profile: {
					firstName: 'Elyssa',
					lastName: 'Heidenreich',
					password: 'uS6tQS3Ch1c8SqM',
					entryMonth: 'February',
					sexType: 'female',
				},
			},
			{
				id: '3',
				userName: 'Irma.Kovacek57',
				profile: {
					firstName: 'Amelia',
					lastName: 'Jenkins',
					password: 'n0Q1qni99TG0l2K',
					entryMonth: 'December',
					sexType: 'female',
				},
			},
			{
				id: '4',
				userName: 'Elissa.Blick55',
				profile: {
					firstName: 'Raleigh',
					lastName: 'Jakubowski',
					password: 'GwzQaovHPtd9iCF',
					entryMonth: 'March',
					sexType: 'male',
				},
			},
			{
				id: '5',
				userName: 'Cortney4',
				profile: {
					firstName: 'Nikko',
					lastName: 'Steuber',
					password: 'R_HuPwwKxOd4CnV',
					entryMonth: 'October',
					sexType: 'male',
				},
			},
		];
		const result = searchEntryMonthProperty(data);
		expect(result).toEqual({
			September: 1,
			February: 1,
			December: 1,
			March: 1,
			October: 1,
		});
	});
});

describe('searchSexTypeProperty', () => {
	it('should return an object with the number of students per', () => {
		const data = [
			{
				id: '1',
				userName: 'Unique48',
				profile: {
					firstName: 'Dakota',
					lastName: 'Fadel',
					password: 'nzSRNAKWIMAEgZv',
					entryMonth: 'September',
					sexType: 'female',
				},
			},
			{
				id: '2',
				userName: 'Uriah_Koch',
				profile: {
					firstName: 'Elyssa',
					lastName: 'Heidenreich',
					password: 'uS6tQS3Ch1c8SqM',
					entryMonth: 'February',
					sexType: 'female',
				},
			},
			{
				id: '3',
				userName: 'Irma.Kovacek57',
				profile: {
					firstName: 'Amelia',
					lastName: 'Jenkins',
					password: 'n0Q1qni99TG0l2K',
					entryMonth: 'December',
					sexType: 'female',
				},
			},
			{
				id: '4',
				userName: 'Elissa.Blick55',
				profile: {
					firstName: 'Raleigh',
					lastName: 'Jakubowski',
					password: 'GwzQaovHPtd9iCF',
					entryMonth: 'March',
					sexType: 'male',
				},
			},
			{
				id: '5',
				userName: 'Cortney4',
				profile: {
					firstName: 'Nikko',
					lastName: 'Steuber',
					password: 'R_HuPwwKxOd4CnV',
					entryMonth: 'October',
					sexType: 'male',
				},
			},
		];
		const result = searchSexTypeProperty(data);
		expect(result).toEqual({
			male: 2,
			female: 3,
		});
	});
});
