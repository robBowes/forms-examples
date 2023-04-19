import type { Actions } from '@sveltejs/kit';
import { construct } from 'radash';

export const actions: Actions = {
	name: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log(formData);

		const allFields = construct(formData);

		console.log(allFields);

		// do api things here

		return {
			submission: `Hello ${allFields.family.join(', ')}!`
		};
	}
};
