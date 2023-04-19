import type { Actions } from '@sveltejs/kit';
import { formValidator } from './validators';

export const actions: Actions = {
	name: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const parsed = formValidator.parse(formData);

		// do api things here
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			color: `I like ${parsed.color}!`
		};
	}
};
