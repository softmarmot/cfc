<script>
	import { programs, groups } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
	import girl from '$lib/assets/girl-jab.jpg';
	import sparring from '$lib/assets/sparring.jpg';
	import team from '$lib/assets/team-kyiv.jpg';

	const images = { girl, sparring, team };
</script>

<section id="programs" class="relative bg-coal py-24 sm:py-32">
	<div class="absolute inset-x-0 top-0 h-2 bg-blood"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<SectionTitle eyebrow="Programs" title="Pick your" accent="fight.">
			<p>Three disciplines, one proven coaching system. Every class starts with the basics and builds you up step by step.</p>
		</SectionTitle>

		<div class="mt-14 grid gap-6 md:grid-cols-3">
			{#each programs as p}
				<article class="group grain relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden bg-ink p-7">
					<img
						src={images[p.image]}
						alt=""
						class="photo absolute inset-0 -z-20 size-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
					/>
					<div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/10"></div>
					<p class="brush self-start text-xs">{p.tag}</p>
					<h3 class="headline mt-4 text-5xl text-white">{p.title}</h3>
					<p class="mt-3 text-white/85">{p.text}</p>
				</article>
			{/each}
		</div>

		<h3 class="font-head mt-24 text-3xl font-bold uppercase">Groups for <span class="text-flame">every age</span></h3>
		<div class="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
			{#each groups as g}
				<div class="bg-coal p-7 transition hover:bg-steel">
					<p class="headline text-4xl text-flame">{g.ages}</p>
					<h4 class="font-head mt-3 text-xl font-bold uppercase">{g.title}</h4>
					<p class="mt-2 text-sm text-white/70">{g.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
