<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<form action="?/name" method="post" use:enhance>
	<label>
		What is your name?
		<input type="text" name="name" value={form?.name || ''} />
	</label>
	<label>
		Do you like coffee?
		<input type="checkbox" name="coffee" checked={form?.likesCoffee} />
	</label>
	<input type="submit" />
</form>

{#if form?.hello}
	<p>{form.hello}</p>
{/if}

{#if form?.likesCoffee}
	<p>I like coffee too!</p>
{/if}
