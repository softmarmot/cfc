<script>
	import { testimonials } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionTitle eyebrow="Testimonials" title="Our" accent="family." />
		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each testimonials as t}
				<figure class="relative border-l-4 border-blood bg-coal p-8">
					<span class="headline absolute top-2 right-6 text-8xl text-white/5" aria-hidden="true">“</span>
					<div class="text-flame" aria-label="5 out of 5 stars">★★★★★</div>
					<blockquote class="mt-4 text-lg text-white/85">“{t.quote}”</blockquote>
					<figcaption class="mt-6">
						<p class="font-head font-bold tracking-wide uppercase">{t.name}</p>
						<p class="text-sm text-white/60">{t.detail}</p>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
