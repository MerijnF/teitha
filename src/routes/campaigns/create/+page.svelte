<script>
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
</script>

<Heading>Create Campaign</Heading>
<form method="post" use:enhance>
	<div class="my-1 flex w-32 flex-col justify-between">
		<label for="slug" class="block">Slug:</label>
		<Input name="slug" id="slug" />
	</div>
	<div class="my-1 flex w-64 flex-col justify-between">
		<label for="name">Name:</label>
		<Input name="name" id="name" required minlength={3} />
	</div>

	<Button type="submit">Create</Button>
</form>
