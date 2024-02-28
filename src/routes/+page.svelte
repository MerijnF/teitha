<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
	let campaigns = $derived(data.campaigns);
</script>

<Heading>Welcome to <span class="font-serif">Teitha-</span></Heading>
<div class="grid grid-cols-2">
	<div>
		<Heading tag="h2">Campaigns</Heading>
		<ul>
			{#each campaigns as campaign}
				<li>{campaign.name}</li>
			{/each}
			<li><a href="campaigns/create">Create</a></li>
		</ul>
	</div>
	<div>
		<Heading tag="h2">Global</Heading>
		<Heading tag="h3">Notes</Heading>
		<Heading tag="h3">Assets</Heading>
	</div>
</div>
