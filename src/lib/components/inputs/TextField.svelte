<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props {
		props?: HTMLInputAttributes;
		value: string;
	}

	let { props, value = $bindable() }: Props = $props();
</script>

<input bind:value class="border-b-solid border-b-[1px] border-b-white" type="text" {...props} />
