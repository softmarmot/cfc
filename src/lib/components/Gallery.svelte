<script>
	import { club } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
	import kyiv from '$lib/assets/team-kyiv.jpg';
	import calgary from '$lib/assets/team-calgary.jpg';
	import women from '$lib/assets/women-fitness.jpg';
	import mma from '$lib/assets/kids-mma.jpg';
	import jerseys from '$lib/assets/kids-jerseys.jpg';
	import girl from '$lib/assets/girl-jab.jpg';

	const items = [
		{ src: kyiv, alt: 'CFC youth team in the Kyiv gym', cls: 'col-span-2 row-span-2' },
		{ src: calgary, alt: 'Adult team in the CFC Calgary gym', cls: 'md:row-span-2', pos: 'object-[50%_60%]' },
		{ src: women, alt: 'Women’s fitness kickboxing athlete in guard', cls: '', pos: 'object-top' },
		{ src: mma, alt: 'Young athlete from the kids MMA program', cls: '', pos: 'object-[50%_25%]' },
		{ src: girl, alt: 'Girls group athlete throwing a jab', cls: '', pos: 'object-top' },
		{ src: jerseys, alt: 'CFC kids in club rash guards', cls: '', pos: 'object-top' }
	];

	let active = $state(-1);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (active = -1)} />

<section id="gallery" class="bg-coal py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionTitle eyebrow="Gallery" title="Life at" accent="CFC." />

		<div class="mt-14 grid grid-flow-dense auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] md:grid-cols-4">
			{#each items as item, i}
				<button
					class="group relative overflow-hidden bg-ink {item.cls}"
					onclick={() => (active = i)}
					aria-label="Enlarge photo: {item.alt}"
				>
					<img
						src={item.src}
						alt={item.alt}
						class="photo size-full object-cover transition duration-500 group-hover:scale-105 {item.pos ?? ''}"
					/>
				</button>
			{/each}
			<a
				href={club.instagram}
				target="_blank"
				rel="noopener"
				class="group flex flex-col justify-end bg-blood p-5 transition-colors hover:bg-white sm:p-6 md:col-span-2"
			>
				<span class="headline text-3xl text-white group-hover:text-ink sm:text-4xl">More on Instagram</span>
				<span class="font-head mt-2 text-sm font-semibold tracking-widest text-white group-hover:text-ink">
					{club.instagramHandle} →
				</span>
			</a>
		</div>
	</div>
</section>

{#if active >= 0}
	<div class="fixed inset-0 z-[60] grid place-items-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label={items[active].alt}>
		<button class="absolute inset-0 cursor-zoom-out" aria-label="Close photo" onclick={() => (active = -1)}></button>
		<img src={items[active].src} alt={items[active].alt} class="relative max-h-[85vh] max-w-full object-contain" />
		<button
			class="absolute top-4 right-4 grid size-12 place-items-center bg-white text-ink hover:bg-blood hover:text-white"
			aria-label="Close photo"
			onclick={() => (active = -1)}
		>
			<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
		</button>
	</div>
{/if}
