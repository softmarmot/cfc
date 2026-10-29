<script>
	// Text-based stand-in for the CFC wordmark. Swap for the official SVG logo when available.
	let { class: klass = '', sub = '' } = $props();
</script>

<span class="inline-flex flex-col items-start leading-none {klass}">
	<span class="font-display -skew-x-12 text-[1em] tracking-tight italic">
		<span class="text-blood">C</span><span class="text-white">FC</span>
	</span>
	{#if sub}
		<span class="font-head mt-1 w-full text-center text-[0.28em] font-semibold tracking-[0.45em] text-white/80 uppercase">
			{sub}
		</span>
	{/if}
</span>
