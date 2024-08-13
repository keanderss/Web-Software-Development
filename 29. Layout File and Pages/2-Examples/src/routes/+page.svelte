<script>
	import Hero from "../components/Hero.svelte";
	import Card from "../components/Card.svelte";
</script>

<svelte:head>
	<title>My application</title>
</svelte:head>

<Hero />

<div class="flex justify-evenly mt-10 mb-10">
	<Card title="Home" description="You are here." link="/" />
	<Card title="About" description="About.. what?" link="/about" />
	<Card title="Contact" description="Get in touch" link="/contact" />
</div>
