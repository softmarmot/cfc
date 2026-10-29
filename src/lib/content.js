// All site copy lives here so text, times and prices can be edited in one place.
// Everything below is placeholder content for the concept.

export const club = {
	name: 'Champion Fight Club',
	short: 'CFC',
	city: 'Calgary',
	founded: 2008,
	tagline: 'Train. Grow. Win.',
	phone: '+1 (587) 227-8487',
	phoneHref: 'tel:+15872278487',
	address: '6434 1a St SW, Calgary, AB T2H 0G6, Canada',
	mapUrl: 'https://maps.app.goo.gl/MpqjDHPX1Yh6dvy37',
	instagram: 'https://www.instagram.com/champion_cfc/',
	instagramHandle: '@champion_cfc',
	facebook: 'https://www.facebook.com/ChampionFightClub'
};

export const developer = {
	name: 'softmarmot',
	url: 'https://github.com/softmarmot'
};

export const nav = [
	{ href: '#about', label: 'Our story' },
	{ href: '#programs', label: 'Programs' },
	{ href: '#schedule', label: 'Schedule' },
	{ href: '#coaches', label: 'Coaches' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#faq', label: 'FAQ' },
	{ href: '#contact', label: 'Contact' }
];

export const disciplines = ['Kickboxing', 'Muay Thai', 'MMA', 'Kids 5–13', 'Girls only', 'Women’s fitness', 'Adults 14+'];

export const stats = [
	{ value: '18', label: 'Years of fighting spirit' },
	{ value: '3', label: 'Cities, one team' },
	{ value: '1000+', label: 'Athletes trained' },
	{ value: '60+', label: 'Champions & medalists' }
];

export const timeline = [
	{
		year: '2008',
		city: 'Bakhmut, Ukraine',
		title: 'Where it all began',
		text: 'CFC opened its doors in a small gym in Bakhmut with one ring, a handful of kids and a simple goal: build champions in sport and in life.'
	},
	{
		year: '2014',
		city: 'Kyiv, Ukraine',
		title: 'A new home in the capital',
		text: 'The club moved to Kyiv and grew into one of the city’s strongest youth kickboxing and Muay Thai teams, with national and international medalists.'
	},
	{
		year: '2022',
		city: 'Calgary, Canada',
		title: 'Same heart, new country',
		text: 'CFC started a new chapter in Calgary, bringing the same coaching system and family atmosphere to Canadian kids, teens and adults.'
	}
];

export const programs = [
	{
		title: 'Kickboxing',
		tag: 'All levels',
		text: 'Punches and kicks, footwork, pad work and conditioning. The core of the CFC system, from first class to the competition ring.',
		image: 'girl'
	},
	{
		title: 'Muay Thai',
		tag: 'Art of 8 limbs',
		text: 'Elbows, knees, clinch and powerful kicks. Traditional Thai technique taught with a modern, safe approach.',
		image: 'sparring'
	},
	{
		title: 'MMA',
		tag: 'Kids 5–12 & adults',
		text: 'Striking, takedowns and ground control combined. Includes our original kids MMA program for ages 5 to 12.',
		image: 'mma'
	}
];

export const groups = [
	{ title: 'Little Champions', ages: '5–7 years', text: 'Coordination, balance and discipline through play. The first step into martial arts.' },
	{ title: 'Kids', ages: '7–13 years', text: 'Technique, fitness and confidence. Optional path to tournaments for those who want to compete.' },
	{ title: 'Girls only', ages: '8–13 years', text: 'A dedicated kickboxing & Muay Thai group where girls train together with confidence.' },
	{ title: 'Teens & Adults', ages: '14+', text: 'Get fit, learn real skills and blow off steam. Beginners welcome, no experience needed.' },
	{ title: 'Women’s fitness kickboxing', ages: '15+ / 18+', text: 'Morning classes for girls 15+ and women 18+. Burn calories, build strength, learn to hit.' }
];

export const schedule = [
	{
		days: 'Mon • Wed • Fri',
		classes: [
			{ time: '4:00 – 5:30 PM', group: 'Kids 5–7' },
			{ time: '5:30 – 7:00 PM', group: 'Kids 10–13' },
			{ time: '7:00 – 8:30 PM', group: 'Teens & Adults 14+' }
		]
	},
	{
		days: 'Tue • Thu',
		classes: [
			{ time: '10:00 – 11:30 AM', group: 'Women & girls 15+' },
			{ time: '4:00 – 5:30 PM', group: 'Girls 8–13' },
			{ time: '5:30 – 7:00 PM', group: 'Kids 7–9' },
			{ time: '7:00 – 8:30 PM', group: 'Adults' }
		]
	},
	{
		days: 'Saturday',
		classes: [
			{ time: '10:00 – 11:30 AM', group: 'Women & girls 15+' },
			{ time: '11:30 AM – 1:00 PM', group: 'Girls 8–13' },
			{ time: '1:00 – 2:30 PM', group: 'Kids 7–9' },
			{ time: '2:30 – 4:00 PM', group: 'Adults' }
		]
	},
	{
		days: 'Sunday',
		classes: [{ time: '10:00 – 11:30 AM', group: 'Women & girls 15+' }]
	}
];

export const coaches = [
	{
		name: 'Andrii Karpuk',
		role: 'Head Coach',
		bio: 'Leads the CFC coaching system that took the club from Bakhmut to Kyiv to Calgary, coaching everyone from first-day beginners to competition fighters.',
		tags: ['Kickboxing', 'Muay Thai', 'MMA'],
		photo: 'andrii'
	},
	{
		name: 'Coach Name',
		role: 'Muay Thai Coach',
		bio: 'Former professional fighter and multiple-time national champion. Leads the teen and adult Muay Thai program.',
		tags: ['Muay Thai', 'Adults']
	},
	{
		name: 'Coach Name',
		role: 'Kids & Girls Coach',
		bio: 'Specialist in youth development. Makes every class safe, fun and focused for our youngest athletes.',
		tags: ['Kids', 'Girls']
	}
];

export const plans = [
	{
		name: 'Drop-in',
		price: '25',
		period: 'per class',
		features: ['Any class for your group', 'Gloves to borrow', 'No commitment'],
		cta: 'Book a class'
	},
	{
		name: 'Kids monthly',
		price: '149',
		period: 'per month',
		features: ['3 classes per week', 'Ages 5–13 & Girls group', 'Belt & skill testing', 'Tournament support'],
		cta: 'Start free trial',
		featured: true
	},
	{
		name: 'Adult unlimited',
		price: '169',
		period: 'per month',
		features: ['Unlimited adult classes', 'Kickboxing, Muay Thai & MMA', 'Open gym time'],
		cta: 'Start free trial'
	},
	{
		name: 'Family',
		price: '-15%',
		period: 'per extra member',
		features: ['Siblings & parents train together', 'Applied to every additional membership', 'One shared billing'],
		cta: 'Ask about family'
	}
];

export const testimonials = [
	{
		quote: 'My son was shy and unsure of himself. After six months at CFC he walks taller, listens better and can’t wait for every class.',
		name: 'Parent name',
		detail: 'Mom of a 9-year-old'
	},
	{
		quote: 'Best coaching I’ve found in Calgary. Real technique, real sparring, but they never let ego get in the way of safety.',
		name: 'Member name',
		detail: 'Adult Muay Thai'
	},
	{
		quote: 'The girls group is amazing. My daughter found strong friends and a confidence that shows everywhere, not just in the gym.',
		name: 'Parent name',
		detail: 'Dad of a 12-year-old'
	}
];

export const faq = [
	{
		q: 'Do I need any experience to start?',
		a: 'No. Most of our members started from zero. Coaches split drills by level, so beginners learn safely next to experienced athletes.'
	},
	{
		q: 'What should I bring to the free trial?',
		a: 'Comfortable sportswear, a water bottle and indoor shoes for the locker room. We train barefoot on the mats and have gloves to borrow.'
	},
	{
		q: 'Is sparring mandatory?',
		a: 'Never. Sparring is optional, controlled and only introduced once a coach decides you are ready. Many members train purely for fitness.'
	},
	{
		q: 'From what age can my child join?',
		a: 'From 5 years old in our Little Champions group. Kids are grouped by age so every class matches their level and attention span.'
	},
	{
		q: 'Can my child compete?',
		a: 'Yes. CFC has a long competition history. Athletes who want to compete get extra training and coach support at local and national events.'
	},
	{
		q: 'How does Bring a Friend work?',
		a: 'Bring a friend who signs up for a membership and you both get 50% off your next month. There is no limit on how many friends you bring.'
	}
];
