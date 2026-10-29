<script>
	import { club, developer, nav } from '$lib/content.js';
	import Logo from './Logo.svelte';
	import roundel from '$lib/assets/logo-roundel.jpg';
</script>

<footer class="border-t-4 border-blood bg-black pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
		<div class="flex items-start gap-5">
			<img src={roundel} alt="" class="size-20 shrink-0 rounded-full" />
			<div>
				<span class="text-5xl"><Logo /></span>
				<p class="font-head mt-2 tracking-[0.3em] text-white/60 uppercase">{club.name}</p>
				<p class="mt-3 max-w-sm text-sm text-white/60">Bakhmut 2008 · Kyiv 2014 · Calgary 2022</p>
			</div>
		</div>
		<nav aria-label="Footer">
			<p class="eyebrow">Explore</p>
			<ul class="mt-4 grid grid-cols-2 gap-2 text-white/80">
				{#each nav as item}<li><a class="hover:text-flame" href={item.href}>{item.label}</a></li>{/each}
			</ul>
		</nav>
		<div>
			<p class="eyebrow">Visit</p>
			<address class="mt-4 space-y-2 text-white/80 not-italic">
				<a class="block hover:text-flame" href={club.mapUrl} target="_blank" rel="noopener">{club.address}</a>
				<a class="block hover:text-flame" href={club.phoneHref}>{club.phone}</a>
			</address>
		</div>
		<div>
			<p class="eyebrow">Follow</p>
			<div class="mt-4 flex gap-3">
				<a href={club.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="grid size-11 place-items-center bg-white/10 hover:bg-blood">
					<svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
				</a>
				<a href={club.facebook} target="_blank" rel="noopener" aria-label="Facebook" class="grid size-11 place-items-center bg-white/10 hover:bg-blood">
					<svg viewBox="0 0 24 24" class="size-5" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.5V11H7v4h3v9h4v-9h3l1-4h-4V8.8c0-.5.3-.8 1-.8Z" /></svg>
				</a>
			</div>
			<p class="font-head mt-6 text-lg font-bold tracking-[0.3em] uppercase">Train <span class="text-flame">•</span> Grow <span class="text-flame">•</span> Win</p>
		</div>
	</div>
	<div class="border-t border-white/10">
		<div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/70 sm:flex-row sm:justify-between sm:px-6">
			<p>© {new Date().getFullYear()} {club.name} {club.city}. All rights reserved.</p>
			<p>
				Developed by
				<a class="font-semibold text-white underline decoration-blood decoration-2 underline-offset-4 hover:text-flame" href={developer.url} target="_blank" rel="noopener">{developer.name}</a>
			</p>
		</div>
	</div>
</footer>
