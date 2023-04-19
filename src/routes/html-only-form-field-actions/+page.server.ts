import type { Actions } from '@sveltejs/kit';
import { construct } from 'radash';

const people = [
	{
		name: 'John',
		age: 24,
		id: 1
	},
	{
		name: 'Jane',
		age: 22,
		id: 2
	}
];

export const load = () => {
	return {
		tableData: people
	};
};

export const actions: Actions = {
	remove: async ({ url, request }) => {
		const formData = Object.fromEntries(await request.formData());

		const allFields = construct(formData);

		const removeId = url.searchParams.get('id');

		const newPeople = allFields.tableData.filter((person) => person.id !== removeId);

		// do api things here

		return {
			tableData: newPeople
		};
	}
};
