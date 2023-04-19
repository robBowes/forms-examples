<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<form method="get" use:enhance data-sveltekit-keepfocus>
	<fieldset>
		<input type="search" name="search" value={data.fields.search} />
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

	<input type="submit" />
</form>

<pre>{JSON.stringify(data.fields, null, 2)}</pre>

<style>
	fieldset {
		display: flex;
		align-items: center;
		gap: 16px;
		justify-content: center;
	}
</style>
