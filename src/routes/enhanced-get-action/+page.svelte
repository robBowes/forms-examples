<script lang="ts">
	import { browser } from '$app/environment';
	import { deserialize } from '$app/forms';
	import { createForm } from 'felte';

	export let data;
	let form: typeof data;

	const {
		form: felteForm,
		data: felteData,
		createSubmitHandler
	} = createForm({
		async onSuccess(response, context) {
			const data = await deserialize(await response.text()).data;
			form = data;
		}
	});

	$: browser && window.history.pushState({}, '', `?${new URLSearchParams($felteData).toString()}`);

	const submit = createSubmitHandler();
</script>

<form action="?/update" method="post" use:felteForm on:input={submit}>
	<fieldset>
		<input type="search" name="search" />
		<label
			>Status
			<select name="filter">
				<option value="all">All</option>
				<option value="active">Active</option>
				<option value="completed">Completed</option>
			</select>
		</label>
	</fieldset>
	<label>
		<input type="checkbox" name="showDeleted" />
		Show deleted
	</label>
</form>

<pre>{JSON.stringify(form?.fields || data.fields, null, 2)}</pre>

<style>
	fieldset {
		display: flex;
		align-items: center;
		gap: 16px;
		justify-content: center;
	}
</style>
