<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { onchange, class: extraClasses, ...props } = $props<{} & HTMLInputAttributes>();

	let changed = $state(false);

	let input: HTMLInputElement | undefined = $state();

	function handleChange(event: Event & { currentTarget: HTMLInputElement }) {
		changed = true;
		if (onchange) {
			onchange(event);
		}
	}
</script>

<input
	bind:this={input}
	onchange={handleChange}
	{...props}
	class:dark:invalid:border-red-500={changed}
	class:invalid:border-red-400={changed}
	class="border-1 rounded-sm border-gray-400 bg-gray-200 px-2 py-1 hover:bg-gray-300 focus:border-gray-400 focus:bg-gray-300 focus:ring-0 focus-visible:border-gray-400 focus-visible:bg-gray-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-400 focus-visible:ring-0 dark:border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:border-gray-500 dark:focus:bg-gray-600 dark:focus-visible:border-gray-500 dark:focus-visible:bg-gray-600 dark:focus-visible:outline-gray-500 {extraClasses}"
/>
