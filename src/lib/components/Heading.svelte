<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		tag = 'h1',
		children,
		class: extraClasses,
		...props
	} = $props<
		{
			children: Snippet;
			tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		} & HTMLAttributes<HTMLElement>
	>();

	const textSize = {
		h1: 'text-2xl font-bold',
		h2: 'text-xl font-semibold',
		h3: 'text-lg font-semibold',
		h4: 'text-base font-semibold',
		h5: 'text-base font-medium',
		h6: 'text-base font-medium'
	};
</script>

<svelte:element this={tag} class="{textSize[tag]} {extraClasses}" {...props}>
	{@render children()}
</svelte:element>
