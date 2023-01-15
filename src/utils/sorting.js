export const sortObject = (object) => {
	const sort = Object.entries(object).sort((a, b) => b[1] - a[1]);
	return sort;
};

export const searchEntryMonthProperty = (data) => {
	let countMonths = {};

	data?.forEach(
		(i) =>
			(countMonths[i.profile.entryMonth] =
				(countMonths[i.profile.entryMonth] || 0) + 1)
	);
	return countMonths;
};

export const searchSexTypeProperty = (data) => {
	let countSex = {};

	data?.forEach(
		(i) =>
			(countSex[i.profile.sexType] = (countSex[i.profile.sexType] || 0) + 1)
	);
	return countSex;
};
