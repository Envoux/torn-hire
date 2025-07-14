<script lang="ts">
	import type { Snippet } from 'svelte';
	import MdiHelpCircle from 'virtual:icons/mdi/help-circle';

	interface Props {
		text: string;
		children?: Snippet<[]>;
	}
	let { text, children }: Props = $props();
</script>

<span class="tooltip relative">
	{#if children}
		{@render children()}
	{:else}
		<MdiHelpCircle />
	{/if}
	<span
		class="tooltip-text invisible absolute z-10 w-30 rounded-md bg-[#808080] p-1 text-center text-[1rem] text-white"
	>
		<p>{text}</p>
	</span>
</span>

<style>
	.tooltip:hover .tooltip-text {
		visibility: visible;
	}
</style>
