<script lang="ts">
	import 'the-new-css-reset/css/reset.css';
	import '../app.css';

	type Link = {
		text: string;
		path: string;
	};

	const links: Link[] = [
		{
			text: 'projects',
			path: '/projects'
		},
		{
			text: 'about me',
			path: '/about'
		},
		{
			text: 'contact me',
			path: '/contact'
		}
	];
</script>

<nav>
	<a id="hero" href="/"><h1>&lt;@jschill00&gt; Justin Schilleman</h1></a>
	<ul>
		{#each links as link}
			<li><a href={link.path}>{link.text}</a></li>
		{/each}
	</ul>
</nav>
<div class="footer-container">
	<main>
		<slot />
	</main>
	<footer>
		&copy; 2023 - {new Date().getFullYear()} Justin Schilleman - All Rights Reserved.
	</footer>
</div>

<style>
	h1 {
		font-weight: 600;
		white-space: normal;
		background: none;
	}

	nav a {
		position: relative;
		bottom: -1.25rem;
		border: 0.5px solid var(--primary-300);
		padding-block: 0.2rem;
		padding-inline: 1rem;
	}

	* {
		background-color: var(--secondary-600);
		color: var(--primary-300);
	}

	main {
		background: none;
		flex-grow: 1;
	}

	nav {
		position: fixed;
		background-color: var(--secondary-600-transparent);
		top: 0;
		width: 100%;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: end;
		padding: 0.25rem;
		padding-inline: clamp(0.25rem, 5vw, 10rem);
		border-bottom: 0.5px solid var(--primary-300);
		margin: 0;
	}

	ul {
		display: grid;
		grid-auto-flow: column;
		gap: 5vw;
	}

	@media (max-width: 870px) {
		a {
			text-align: center;
		}

		nav {
			align-items: center;
			flex-direction: column;
		}
	}

	@media (max-width: 430px) {
		ul {
			grid-auto-flow: row;
			width: 100%;
		}

		a:not(#hero) {
			width: 100%;
			font-size: 0.75rem;
		}
	}

	ul,
	li {
		background: none;
	}

	a {
		display: inline-block;
		border-radius: 0.1875rem;
		white-space: nowrap;
		transform: scale(1);
		transition: transform 0.25s ease;
	}

	a:hover,
	a:focus {
		text-decoration: underline;
		background-color: var(--secondary-500);
		transform: scale(1.05);
	}
	.footer-container {
		height: 100%;
		min-height: 100vh;
		background: none;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 0;
	}

	main {
		/* flex-grow: 1; */
		margin: 0;
	}

	footer {
		font-size: 0.9rem;
		width: 100%;
		text-align: center;
		padding: 0.25rem;
		background-color: var(--secondary-600-transparent);
		border-top: 0.5px solid var(--primary-300);
	}
</style>
