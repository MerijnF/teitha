<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		children,
		class: extraClasses,
		...props
	} = $props<{ children: Snippet } & HTMLButtonAttributes>();
</script>

<button
	{...props}
	class="rounded-lg border border-gray-400 bg-gray-100 px-2 py-1 font-semibold hover:bg-gray-200 focus:bg-gray-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-400 dark:border-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus-visible:outline-gray-500 {extraClasses}"
	>{@render children()}</button
>
