<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<form action="?/anything" method="post" use:enhance>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each form?.tableData || data.tableData as row, i}
				<tr>
					<td>
						<input type="hidden" name="tableData.{i}.name" value={row.name} />
						{row.name}
					</td>
					<td>
						<input type="hidden" name="tableData.{i}.age" value={row.age} />
						{row.age}
					</td>
					<td>
						<input type="hidden" name="tableData.{i}.id" value={row.id} />
						<button type="submit" formaction="?/remove&id={row.id}" class="contrast outine">
							Remove
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</form>
