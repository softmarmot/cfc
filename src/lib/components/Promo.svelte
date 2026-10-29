<script>
	import kids from '$lib/assets/kids-jerseys.jpg';
</script>

<section class="relative overflow-hidden bg-blood">
	<div class="mx-auto grid max-w-7xl items-stretch md:grid-cols-[2fr_3fr]">
		<div class="relative min-h-72 md:min-h-[28rem]">
			<img src={kids} alt="CFC kids in club rash guards" class="absolute inset-0 size-full object-cover object-top" />
			<div class="absolute inset-0 bg-gradient-to-t from-blood/80 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-blood"></div>
		</div>
		<div class="px-4 py-14 sm:px-6 md:py-20 md:pl-10">
			<p class="font-head text-sm font-bold tracking-[0.25em] text-white uppercase">Limited time offer</p>
			<h2 class="headline mt-4 text-6xl text-white sm:text-7xl lg:text-8xl">
				Bring a friend.<br />
				<span class="mt-3 inline-block bg-ink px-3 pt-1 pb-2">Get 50% off</span>
			</h2>
			<p class="mt-6 max-w-lg text-lg text-white">
				When your friend signs up for a membership, you both get half off your next month. More friends, more savings.
			</p>
			<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
				<a href="#contact" class="btn bg-ink text-white hover:bg-white hover:text-ink">Claim the offer</a>
				<p class="font-head font-semibold tracking-wide text-white uppercase">Valid until Dec 15</p>
			</div>
		</div>
	</div>
</section>
