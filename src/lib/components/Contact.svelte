<script>
	import { club, groups, programs } from '$lib/content.js';

	let sent = $state(false);

	// Concept only: the form does not send anywhere yet.
	// Hook it up to Formspree, Netlify Forms or a CRM before launch.
	function submit(e) {
		e.preventDefault();
		sent = true;
	}

	const field =
		'w-full border border-white/25 bg-ink px-4 py-3 text-base text-white placeholder-white/50 transition-colors focus:border-flame focus:outline-none';
	const label = 'font-head mb-2 block text-sm font-semibold tracking-wider text-white uppercase';
</script>

<section id="contact" class="relative overflow-hidden py-24 sm:py-32">
		<div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
		<div>
			<p class="eyebrow">First class free</p>
			<h2 class="headline mt-3 text-6xl sm:text-7xl lg:text-8xl">
				Your first <span class="text-flame">round</span> is on us.
			</h2>
			<p class="mt-5 max-w-lg text-lg text-white/70">
				Leave your details and we’ll call you to book a free trial class that fits your age and level.
			</p>

			<dl class="mt-10 grid gap-6 sm:grid-cols-2">
				<div class="sm:col-span-2">
					<dt class="eyebrow">Address</dt>
					<dd class="font-head mt-1 text-xl">{club.address}</dd>
				</div>
				<div>
					<dt class="eyebrow">Phone</dt>
					<dd class="font-head mt-1 text-xl"><a class="hover:text-flame" href="tel:{club.phone.replace(/[^+\d]/g, '')}">{club.phone}</a></dd>
				</div>
				<div>
					<dt class="eyebrow">Email</dt>
					<dd class="font-head mt-1 text-xl"><a class="hover:text-flame" href="mailto:{club.email}">{club.email}</a></dd>
				</div>
			</dl>

			<!-- map placeholder -->
			<a
				href={club.mapUrl}
				target="_blank"
				rel="noopener"
				class="group relative mt-10 block h-56 overflow-hidden border border-white/10 bg-coal"
				style="background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 28px 28px;"
			>
				<div class="absolute top-1/2 left-0 h-3 w-full -rotate-6 bg-white/5"></div>
				<div class="absolute top-0 left-1/3 h-full w-3 rotate-12 bg-white/5"></div>
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
					<svg viewBox="0 0 24 32" class="h-14 w-10 text-flame drop-shadow-lg transition group-hover:-translate-y-1" fill="currentColor" aria-hidden="true">
						<path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0Zm0 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
					</svg>
				</div>
				<span class="font-head absolute bottom-4 left-4 bg-ink px-3 py-1.5 text-sm font-semibold tracking-widest uppercase group-hover:bg-blood">
					Open in Google Maps →
				</span>
			</a>
		</div>

		<div class="border-t-4 border-blood bg-coal p-6 sm:p-10">
			{#if sent}
				<div class="grid h-full place-items-center py-16 text-center">
					<div>
						<p class="headline text-6xl text-flame">You’re in!</p>
						<p class="mt-4 text-lg text-white/80">Thanks! A coach will call you within 24 hours to book your free class.</p>
						<button class="btn-ghost mt-8" onclick={() => (sent = false)}>Send another</button>
					</div>
				</div>
			{:else}
				<h3 class="font-head text-2xl font-bold text-white uppercase">Book a free trial</h3>
				<p class="mt-1 text-white/70">Fields marked <span class="text-flame">*</span> are required.</p>
				<form class="mt-6 grid gap-5 sm:grid-cols-2" onsubmit={submit}>
					<div class="sm:col-span-2">
						<label class={label} for="trial-name">Full name <span class="text-flame">*</span></label>
						<input class={field} id="trial-name" name="name" required autocomplete="name" placeholder="Jane Smith" />
					</div>
					<div>
						<label class={label} for="trial-phone">Phone <span class="text-flame">*</span></label>
						<input class={field} id="trial-phone" name="phone" type="tel" required autocomplete="tel" placeholder="(403) 555-0123" />
					</div>
					<div>
						<label class={label} for="trial-email">Email</label>
						<input class={field} id="trial-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" />
					</div>
					<div>
						<label class={label} for="trial-program">Program</label>
						<select class={field} id="trial-program" name="program">
							{#each programs as p}<option>{p.title}</option>{/each}
							<option>Not sure yet</option>
						</select>
					</div>
					<div>
						<label class={label} for="trial-group">Age group</label>
						<select class={field} id="trial-group" name="group">
							{#each groups as g}<option>{g.title} ({g.ages})</option>{/each}
						</select>
					</div>
					<div class="sm:col-span-2">
						<label class={label} for="trial-message">Message <span class="font-normal normal-case tracking-normal text-white/60">(optional)</span></label>
						<textarea class={field} id="trial-message" name="message" rows="3" placeholder="Experience, goals or the best time to call"></textarea>
					</div>
					<button type="submit" class="btn-red text-lg sm:col-span-2">Get my free class</button>
					<p class="text-sm text-white/70 sm:col-span-2">We’ll only use your details to book your trial class.</p>
				</form>
			{/if}
		</div>
	</div>
</section>
