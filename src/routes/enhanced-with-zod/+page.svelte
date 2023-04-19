<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-zod';
	import { formValidator } from './validators';
	import { deserialize } from '$app/forms';

	let apiResponse = {};

	const { form, isSubmitting, isValid } = createForm({
		async onSuccess(response, context) {
			const data = await deserialize(await response.text()).data;
			console.log(data);

			apiResponse = data;
		},
		extend: [
			validator({
				schema: formValidator
			}),
			reporter
		]
	});
</script>

<form action="?/name" method="post" use:form>
	<label>
		What is your favorite color?
		<input type="text" name="color" />
		<ValidationMessage for="color" let:messages>
			{#each messages || [] as message}
				<p class="error">{message}</p>
			{/each}
		</ValidationMessage>
	</label>
	<input type="submit" disabled={$isSubmitting || !$isValid} />
	{#if $isSubmitting}
		<p>Submitting...</p>
	{/if}
</form>

{#if apiResponse?.color}
	<p>{apiResponse.color}</p>
{/if}

<style>
	.error {
		color: red;
	}
</style>
