<script>
	import { stats, timeline } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
	import team from '$lib/assets/team-kyiv.jpg';
</script>

<section id="about" class="relative py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid items-center gap-14 lg:grid-cols-2">
			<div>
				<SectionTitle eyebrow="Our story" title="Three cities." accent="One team.">
					<p>
						Champion Fight Club was born in 2008 in Bakhmut, Ukraine. War forced us to move twice, but the club never
						stopped training. Today CFC continues in Calgary with the same coaches, the same values and the same hunger
						to win.
					</p>
				</SectionTitle>

				<dl class="mt-12 grid grid-cols-2 gap-px bg-white/10">
					{#each stats as s}
						<div class="bg-ink p-5">
							<dt class="font-head text-xs tracking-widest text-white/60 uppercase">{s.label}</dt>
							<dd class="headline mt-2 text-5xl text-flame">{s.value}</dd>
						</div>
					{/each}
				</dl>
			</div>

			<div class="grain relative">
				<img src={team} alt="CFC youth team in the Kyiv gym" class="photo aspect-square w-full object-cover" />
				<div class="absolute -bottom-5 -left-3 sm:-left-5">
					<p class="brush text-lg">CFC Kyiv team</p>
				</div>
			</div>
		</div>

		<!-- timeline -->
		<div class="relative mt-24">
		<div class="absolute top-7 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-blood via-blood to-white/20 md:block"></div>
		<ol class="relative grid gap-10 md:grid-cols-3 md:gap-6">
			{#each timeline as t, i}
				<li class="relative">
					<div class="flex items-center gap-4">
						<span
							class="headline relative z-10 grid h-14 min-w-28 place-items-center px-4 text-3xl {i === timeline.length - 1
								? 'bg-blood text-white'
								: 'bg-white text-ink'}"
							style="clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%)"
						>
							{t.year}
						</span>
					</div>
					<p class="eyebrow mt-6">{t.city}</p>
					<h3 class="font-head mt-2 text-2xl font-bold uppercase">{t.title}</h3>
					<p class="mt-3 text-white/70">{t.text}</p>
				</li>
			{/each}
		</ol>
		</div>
	</div>
</section>
