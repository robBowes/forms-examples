import searchResults from './results.json';

export const load = ({ url }) => {
	const ageFilter = url.searchParams.get('age');
	const searchFilter = url.searchParams.get('search');

	const filteredSearchResults = searchResults.filter((result) => {
		if (ageFilter && result.age < parseInt(ageFilter)) {
			return false;
		}

		if (searchFilter && !result.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())) {
			return false;
		}

		return true;
	});

	return {
		searchResults: filteredSearchResults,
		fields: Object.fromEntries(url.searchParams)
	};
};
