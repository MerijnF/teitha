<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: extraClasses,
		style: extraStyle
	}: { children: Snippet; class?: string; style?: string } = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<span class="material-symbols-sharp {extraClasses}" style={extraStyle}>{@render children()}</span>
