<script>
	import { coaches } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="coaches" class="bg-coal py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionTitle eyebrow="Coaching team" title="Built by" accent="champions.">
			<p>Our coaches have trained athletes for nearly two decades across Ukraine and Canada. Same people, same system.</p>
		</SectionTitle>

		<div class="mt-14 grid gap-8 md:grid-cols-3">
			{#each coaches as c}
				<article class="group grid grid-cols-[7rem_1fr] gap-x-5 md:block">
					<div class="grain relative isolate row-span-4 aspect-[4/5] self-start overflow-hidden bg-steel">
						<!-- photo placeholder -->
						<svg viewBox="0 0 200 250" class="absolute inset-x-0 bottom-0 -z-10 w-full text-white/10" fill="currentColor" aria-hidden="true">
							<circle cx="100" cy="85" r="42" />
							<path d="M20 250c0-60 36-100 80-100s80 40 80 100Z" />
						</svg>
						<p class="absolute right-4 bottom-4 hidden text-xs tracking-widest text-white/60 uppercase md:block">Photo coming soon</p>
						<div class="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-blood transition duration-500 group-hover:scale-x-100"></div>
					</div>
					<p class="eyebrow text-xs md:mt-6 md:text-sm">{c.role}</p>
					<h3 class="headline mt-2 text-3xl md:text-4xl">{c.name}</h3>
					<p class="mt-3 text-white/80">{c.bio}</p>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each c.tags as t}
							<span class="font-head border border-white/30 px-3 py-1 text-white/90 text-xs tracking-widest uppercase">{t}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
