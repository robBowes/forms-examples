<script lang="ts">
	export let form;
</script>

<form action="?/name" method="post">
	{#each Array.from({ length: 4 }) as _, i}
		<div>
			<label>
				<span>Name {i + 1}</span>
				<input type="text" name="family.{i}.name" />
			</label>
		</div>
	{/each}
	<input type="submit" />
</form>

{#if form?.submission}
	<p>{form.submission}</p>
{/if}
