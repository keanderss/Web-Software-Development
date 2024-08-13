<script>
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Navbar from "../components/Navbar.svelte";
	import Cookies from "../components/Cookies.svelte";
</script>

<Navbar />

<div class="bg-gradient-to-br from-base-200 to-gray-900">
	<div class="container mx-auto min-h-screen">
		<div class="navbar"></div>
		<slot />
	</div>
</div>

<Footer />

<Cookies />
