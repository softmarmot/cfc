<script>
	let { eyebrow, title, accent = '', align = 'left', children } = $props();
</script>

<div class={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
	<p class="eyebrow">{eyebrow}</p>
	<h2 class="headline mt-3 text-5xl sm:text-6xl lg:text-7xl">
		{title}
		{#if accent}<span class="text-flame">{accent}</span>{/if}
	</h2>
	{#if children}
		<div class="mt-5 text-lg text-white/70">{@render children()}</div>
	{/if}
</div>
