export const load = ({ url }) => {
	console.log(Object.fromEntries(url.searchParams));

	return {
		fields: Object.fromEntries(url.searchParams)
	};
};

export const actions = {
	update: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('formData', formData);

		return {
			fields: formData
		};
	}
};
