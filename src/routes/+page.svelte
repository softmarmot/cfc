<script>
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Story from '$lib/components/Story.svelte';
	import Programs from '$lib/components/Programs.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Promo from '$lib/components/Promo.svelte';
	import Coaches from '$lib/components/Coaches.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Champion Fight Club Calgary | Kickboxing, Muay Thai & MMA</title>
	<meta
		name="description"
		content="Kickboxing, Muay Thai and MMA classes for kids, girls, teens and adults in Calgary. Founded in 2008 in Ukraine. Book your free trial class."
	/>
</svelte:head>

<a href="#main" class="sr-only z-[70] bg-white px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">Skip to content</a>
<Nav />
<main id="main">
	<Hero />
	<Story />
	<Programs />
	<Schedule />
	<Promo />
	<Coaches />
	<Pricing />
	<Gallery />
	<Testimonials />
	<Faq />
	<Contact />
</main>
<Footer />
