<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '$lib/components/Icon.svelte';

	let { data }: { data: PageData } = $props();
	let campaigns = $derived(data.campaigns);
</script>
