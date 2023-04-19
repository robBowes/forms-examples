export const load = ({ url }) => {
	return {
		fields: Object.fromEntries(url.searchParams)
	};
};
