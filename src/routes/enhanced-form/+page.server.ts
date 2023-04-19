import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	name: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const likesCoffee = formData.get('coffee') === 'on';

		// do api things here

		if (typeof name === 'string') {
			return {
				hello: `Hello ${name}!`,
				likesCoffee,
				name
			};
		}
	}
};
