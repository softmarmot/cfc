<script>
	import { club, disciplines } from '$lib/content.js';
	import team from '$lib/assets/team-calgary.jpg';
	import roundel from '$lib/assets/logo-roundel.jpg';
</script>

<section id="top" class="grain relative isolate flex min-h-svh flex-col overflow-hidden">
	<img src={team} alt="" class="photo absolute inset-0 -z-20 size-full object-cover object-[50%_40%] opacity-40" />
	<!-- dark scrims keep the headline and copy readable over the photo -->
	<div class="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40"></div>
	<div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/70"></div>
	<!-- red slash, kept to the right edge on large screens so it never sits behind text -->
	<div class="absolute top-0 -right-24 -z-10 hidden h-full w-64 skew-x-[-14deg] bg-blood/70 lg:block xl:w-80"></div>

	<div class="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-16 sm:px-6">
		<p class="brush self-start text-sm sm:text-base">Since {club.founded} · Now in {club.city}</p>

		<h1 class="headline mt-6 text-[clamp(3.5rem,15vw,9.5rem)]">
			<span class="block text-white">Fight like a</span>
			<span class="block text-flame">Champion</span>
		</h1>

		<p class="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
			Kickboxing, Muay Thai and MMA for kids, girls, teens and adults. Eighteen years of coaching that started in
			Ukraine, now in the heart of Calgary.
		</p>

		<div class="mt-9 flex flex-col gap-4 sm:flex-row">
			<a href="#contact" class="btn-red text-lg">Book a free trial</a>
			<a href="#schedule" class="btn-ghost text-lg">See schedule</a>
		</div>

		<p class="font-head mt-12 text-lg font-bold tracking-[0.3em] text-white uppercase sm:text-2xl">
			Train <span class="text-flame" aria-hidden="true">•</span> Grow <span class="text-flame" aria-hidden="true">•</span> Win
		</p>
	</div>

	<img
		src={roundel}
		alt=""
		class="absolute right-10 bottom-28 hidden size-40 rounded-full shadow-2xl shadow-black/60 lg:block xl:right-20 xl:size-48"
	/>

	<!-- discipline ticker -->
	<div class="relative overflow-hidden bg-blood py-3">
		<p class="sr-only">Disciplines: {disciplines.join(', ')}</p>
		<div class="animate-marquee flex w-max" aria-hidden="true">
			{#each [0, 1] as copy}
				<div class="flex shrink-0">
					{#each [...disciplines, ...disciplines] as d}
						<span class="headline px-6 text-2xl text-white sm:text-3xl">{d}</span>
						<span class="headline self-center text-xl text-white/70">/</span>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
