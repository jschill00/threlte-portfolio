<script lang="ts">
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<div id="pad" />
<div id="container">
	<div
		id="errorCard"
		in:scale={{
			duration: 500,
			delay: 500,
			opacity: 0.5,
			start: 0.5,
			easing: cubicInOut
		}}
	>
		<div class="cardLeft">
			<h2>An error has occured!</h2>
			<div class="cardBottom">
				<h3>{$page.status}</h3>
				<p>{$page.error?.message}</p>
			</div>
		</div>
		<img src="/images/errorRobot_LRG.webp" alt="A sad robot sitting on the ledge of a cube" />
	</div>

	<button
		on:click={() => {
			history.back();
		}}
		>go back
	</button>
</div>

<style>
	h2 {
		font-weight: 700;
		font-size: 4rem;
		word-wrap: break-word;
		line-height: 0.9;
		text-align: center;
		padding-bottom: 1rem;
		position: relative;
		transform: rotateX(-30deg) rotateY(5deg) rotateZ(2deg);
	}

	p {
		text-shadow: 3px 3px 0px var(--secondary-800);
	}

	h3 {
		font-size: 2rem;
		font-weight: 600;
	}

	@media (max-width: 755px) {
		#container {
			margin-top: 10%;
		}

		p {
			font-size: 1.25rem;
			text-wrap: balance;
			text-align: center;
		}

		h2 {
			font-size: 3.125rem;
			text-wrap: balance;
		}

		h3 {
			font-size: 1.5625rem;
		}
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 1.2rem;
			text-wrap: balance;
		}

		#errorCard {
			grid-template-columns: 2.75fr 2fr;
		}

		p {
			font-size: 0.875rem;
		}
	}

	* {
		background: none;
	}

	button {
		margin-top: 5rem;
		background-color: var(--secondary-600);
		padding-inline: 1rem;
		padding-block: 0.2rem;
		border: 0.5px solid var(--primary-300);
		transition: transform 0.25s ease;
		border-radius: 0.1875rem;
	}

	button:hover,
	button:focus {
		text-decoration: underline;
		background-color: var(--secondary-500);
		transform: scale(1.05);
	}

	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 50%;
		min-height: 100vh;
	}

	#errorCard {
		display: grid;
		grid-template-columns: 4fr 1fr;
		width: min(40rem, 80%);
		padding: 1.5rem;
		border-radius: 0.375rem;
		border: 0.5px solid var(--primary-300);
		background-color: var(--secondary-600-transparent);
		text-shadow: 4px 4px 0px var(--secondary-800);
	}

	.cardLeft {
		display: grid;
		justify-content: space-between;
		align-items: center;
	}

	.cardBottom {
		display: flex;
		border-top: 0.5px solid var(--primary-300);
		margin-right: 1.75rem;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		padding-top: 1rem;
	}

	img {
		position: relative;
		scale: calc(1 + (2 / 3));
		right: -2.3rem;
		rotate: 10deg;
	}

	@media (max-width: 715px) {
		img {
			scale: 1.5;
			top: 1.5rem;
		}

		#errorCard {
			grid-template-columns: 2.5fr 2fr;
		}
	}

	@media (max-width: 400px) {
		img {
			scale: 1.75;
			top: 1.125rem;
		}

		#errorCard {
			margin-right: 10%;
		}

		.cardBottom {
			gap: 0.5rem;
		}
		#container {
			margin-top: 25%;
		}
	}

	@media (max-width: 330px) {
		img {
			scale: 2.5;
			top: 1.5rem;
		}

		#errorCard {
			grid-template-columns: 2fr 2fr;
			margin-right: 20%;
		}
	}
</style>
