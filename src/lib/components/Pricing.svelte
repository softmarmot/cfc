<script>
	import { plans } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="pricing" class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionTitle eyebrow="Memberships" title="Simple" accent="pricing." align="center">
			<p>Your first class is always free. No registration fees, cancel anytime with 30 days notice. Prices in CAD plus GST.</p>
		</SectionTitle>

		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
			{#each plans as p}
				<div class="relative flex h-full flex-col p-7 {p.featured ? 'bg-blood' : 'border border-white/15 bg-coal'}">
					{#if p.featured}
						<span class="font-head absolute -top-3.5 left-7 bg-white px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase">
							Most popular
						</span>
					{/if}
					<h3 class="font-head text-xl font-bold tracking-wide text-white uppercase">{p.name}</h3>
					<p class="mt-5 flex items-baseline gap-1 text-white">
						{#if !p.price.startsWith('-')}<span class="font-head text-2xl">$</span>{/if}
						<span class="headline text-7xl">{p.price}</span>
					</p>
					<p class="text-sm {p.featured ? 'text-white' : 'text-white/70'}">{p.period}</p>
					<ul class="mt-6 flex-1 space-y-3 text-sm text-white">
						{#each p.features as f}
							<li class="flex gap-3">
								<svg viewBox="0 0 20 20" class="mt-0.5 size-4 shrink-0 {p.featured ? 'text-white' : 'text-flame'}" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
									<path d="M4 10.5l4 4 8-9" />
								</svg>
								<span>{f}</span>
							</li>
						{/each}
					</ul>
					<a
						href="#contact"
						class="btn mt-8 {p.featured
							? 'bg-white text-ink hover:bg-ink hover:text-white'
							: 'text-white ring-2 ring-white/70 ring-inset hover:bg-white hover:text-ink'}"
					>
						{p.cta}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
