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
	<a href="/"><h1>&lt;@jschill00&gt; Justin Schilleman</h1></a>
	<ul>
		{#each links as link}
			<li><a href={link.path}>{link.text}</a></li>
		{/each}
	</ul>
</nav>
<main>
	<slot />
</main>

<style>
	h1 {
		font-weight: 600;
		white-space: normal;
		background: none;
	}

	nav a {
		position: relative;
		bottom: -1.25rem;
		border: 0.5px dashed var(--primary-300);
		padding-block: 0.2rem;
		padding-inline: 1rem;
	}

	* {
		background-color: var(--secondary-600);
		color: var(--primary-300);
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
		border-bottom: 0.5px dashed var(--primary-300);
		margin: 0;
	}

	ul {
		display: grid;
		grid-auto-flow: column;
		gap: 5vw;
	}

	@media (max-width: 850px) {
		a {
			text-align: center;
		}

		ul {
			grid-auto-flow: row;
		}
	}

	ul,
	li {
		background: none;
	}

	a {
		display: inline-block;
		font-weight: 400;
		white-space: nowrap;
		transform: scale(1);
		transition: transform 0.25s ease;
	}

	a:hover {
		text-decoration: underline;
		background-color: var(--secondary-500);
		transform: scale(1.05);
	}

	ul a:hover {
		transform: scale(1.05);
	}
</style>
