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
	@media (max-width: 600px) {
		#pad {
			margin-top: 3rem;
		}

		h2 {
			font-size: 1.25rem;
		}
	}

	* {
		background: none;
	}

	button {
		margin-top: 2rem;
		background-color: var(--secondary-600);
		padding-inline: 1rem;
		padding-block: 0.2rem;
		font-weight: 400;
		border: 0.5px solid var(--primary-300);
		transition: transform 0.25s ease;
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
		min-height: 100vh;
	}

	#errorCard {
		display: grid;
		grid-template-columns: 4fr 1fr;
		width: min(40rem, 80%);
		padding: 1.5rem;
		border: 0.5px solid var(--primary-300);
		border-radius: 1rem;
		background-color: var(--secondary-600-transparent);
		text-shadow: 6px 6px 0px var(--secondary-800);
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
		justify-content: space-around;
		align-items: baseline;
		padding-top: 1rem;
	}

	h3 {
		font-size: 2rem;
		font-weight: 600;
	}

	img {
		position: relative;
		scale: calc(1 + (2 / 3));
		right: -2.3rem;
		rotate: 10deg;
	}

	p {
		font-size: 1.25rem;
		text-shadow: 4px 4px 0px var(--secondary-800);
	}

	@media (max-width: 480px) {
		img {
			scale: 2.25;
			top: 1rem;
		}
	}

	@media (max-width: 385px) {
		img {
			scale: 3.25;
			top: 1.25rem;
		}

		#errorCard {
			margin-right: 10%;
		}
	}
</style>
