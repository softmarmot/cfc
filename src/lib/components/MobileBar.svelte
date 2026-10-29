<script>
	import { club } from '$lib/content.js';
</script>

<!-- Quick actions pinned to the bottom of the screen on phones and tablets -->
<nav
	class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/15 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
	aria-label="Quick actions"
>
	<a href={club.phoneHref} class="flex flex-col items-center justify-center gap-1 py-2.5 text-white hover:text-flame">
		<svg viewBox="0 0 24 24" class="size-6" fill="currentColor" aria-hidden="true">
			<path
				d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"
			/>
		</svg>
		<span class="font-head text-xs font-semibold tracking-widest uppercase">Call</span>
	</a>
	<a
		href={club.mapUrl}
		target="_blank"
		rel="noopener"
		class="flex flex-col items-center justify-center gap-1 border-x border-white/15 py-2.5 text-white hover:text-flame"
	>
		<svg viewBox="0 0 24 24" class="size-6" fill="currentColor" aria-hidden="true">
			<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
		</svg>
		<span class="font-head text-xs font-semibold tracking-widest uppercase">Directions</span>
	</a>
	<a href="#contact" class="flex flex-col items-center justify-center gap-1 bg-blood py-2.5 text-white hover:bg-white hover:text-ink">
		<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
		<span class="font-head text-xs font-semibold tracking-widest uppercase">Free trial</span>
	</a>
</nav>
