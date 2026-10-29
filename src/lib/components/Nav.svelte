<script>
	import { nav } from '$lib/content.js';
	import Logo from './Logo.svelte';

	let open = $state(false);
	let scrolled = $state(false);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 40)} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-colors duration-300 {scrolled || open
		? 'bg-ink/95 shadow-lg shadow-black/40 backdrop-blur'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
		<a href="#top" class="text-4xl" aria-label="Champion Fight Club home">
			<Logo sub="Calgary" />
		</a>

		<nav class="hidden items-center gap-7 lg:flex" aria-label="Main">
			{#each nav as item}
				<a
					href={item.href}
					class="font-head text-sm font-medium tracking-widest text-white/80 uppercase transition hover:text-flame"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<a href="#contact" class="btn-red hidden px-5 py-2.5 text-sm sm:inline-flex">Free trial</a>
			<button
				class="grid size-11 place-items-center text-white lg:hidden"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<svg viewBox="0 0 24 24" class="size-7" fill="none" stroke="currentColor" stroke-width="2.5">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M3 6h18M3 12h18M3 18h18" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav class="border-t border-white/10 px-4 pb-6 lg:hidden" aria-label="Mobile">
			{#each nav as item}
				<a
					href={item.href}
					onclick={() => (open = false)}
					class="headline block border-b border-white/5 py-3 text-3xl text-white hover:text-flame"
				>
					{item.label}
				</a>
			{/each}
			<a href="#contact" onclick={() => (open = false)} class="btn-red mt-6 w-full">Book a free trial</a>
		</nav>
	{/if}
</header>
