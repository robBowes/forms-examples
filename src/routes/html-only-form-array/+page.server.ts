import type { Actions } from '@sveltejs/kit';
import { construct } from 'radash';

export const actions: Actions = {
	name: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		const allFields = construct(formData);

		// do api things here

		return {
			submission: `Hello ${allFields.family.join(', ')}!`
		};
	}
};
