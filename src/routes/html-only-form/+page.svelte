<script lang="ts">
	export let form;
</script>

<form action="?/name" method="post">
	<label>
		What is your name?
		<input type="text" name="name" />
	</label>
	<label>
		Do you like coffee?
		<input type="checkbox" name="coffee" value="likesCoffee" />
	</label>
	<input type="submit" />
</form>

{#if form?.hello}
	<p>{form.hello}</p>
{/if}

{#if form?.likesCoffee}
	<p>I like coffee too!</p>
{/if}
