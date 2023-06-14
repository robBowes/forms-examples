<script lang="ts">
	export let data;

	let formElement: HTMLFormElement;
</script>

<form data-sveltekit-keepfocus data-sveltekit-replacestate bind:this={formElement}>
	<fieldset>
		<input type="search" name="search" value={data.fields?.search || ''} on:input={() => formElement.requestSubmit()} />
		<label
			>Minimum Age
			<select name="age" on:change={() => formElement.requestSubmit()}>
				<option value="40">&gt; 40</option>
				<option value="50">&gt; 50</option>
				<option value="60">&gt; 60</option>
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

<table>
	<thead>
		<tr>
			<td>Name</td>
			<td>Age</td>
			<td>Birth place</td>
		</tr>
	</thead>
	<tbody>
		{#each data.searchResults as result}
			<tr>
				<td>{result.name}</td>
				<td>{result.age}</td>
				<td>{result.birth_city}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	fieldset {
		display: flex;
		align-items: center;
		gap: 16px;
		justify-content: center;
	}
</style>
