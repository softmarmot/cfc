<script>
	import { schedule } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="schedule" class="relative py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<SectionTitle eyebrow="Class schedule" title="When we" accent="train." />
			<a href="#contact" class="btn-red">Reserve your spot</a>
		</div>

		<div class="mt-14 grid items-start gap-6 md:grid-cols-2">
			{#each schedule as day}
				<div class="border border-white/10 bg-coal/70 p-6 sm:p-8">
					<div class="flex items-center gap-3">
						<svg viewBox="0 0 24 24" class="size-8 shrink-0 text-flame" fill="currentColor" aria-hidden="true">
							<path
								d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2Zm12 8H5v10h14V10ZM7 12h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2H7v-2Zm4 0h2v2h-2v-2Z"
							/>
						</svg>
						<h3 class="brush text-lg sm:text-xl">{day.days}</h3>
					</div>
					<ul class="mt-6 divide-y divide-white/10">
						{#each day.classes as c}
							<li class="flex items-center gap-3 py-4">
								<svg viewBox="0 0 24 24" class="size-5 shrink-0 text-flame" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
									<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
								</svg>
								<span class="font-head text-lg font-semibold whitespace-nowrap">{c.time}</span>
								<span class="ml-auto text-right text-white/70">{c.group}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<p class="mt-6 text-sm text-white/60">Schedule may change during holidays. Follow us on Instagram for updates.</p>
	</div>
</section>
