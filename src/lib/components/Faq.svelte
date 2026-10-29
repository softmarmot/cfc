<script>
	import { faq } from '$lib/content.js';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="faq" class="bg-coal py-24 sm:py-32">
	<div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
		<SectionTitle eyebrow="FAQ" title="Got" accent="questions?">
			<p>Can’t find your answer? Call us or send a message and a coach will get back to you the same day.</p>
		</SectionTitle>

		<div class="divide-y divide-white/10 border-y border-white/10">
			{#each faq as item}
				<details class="group py-2">
					<summary
						class="font-head flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold tracking-wide uppercase marker:hidden hover:text-flame [&::-webkit-details-marker]:hidden"
					>
						{item.q}
						<span class="grid size-8 shrink-0 place-items-center bg-white/10 text-xl transition group-open:rotate-45 group-open:bg-blood">+</span>
					</summary>
					<p class="pr-14 pb-4 text-white/70">{item.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
