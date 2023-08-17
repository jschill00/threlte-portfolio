<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div id="canvasContainer">
	<Canvas toneMapping={3}>
		<Scene />
	</Canvas>
</div>

<style>
	#canvasContainer {
		width: 100%;
		height: 100%;
		background-color: var(--secondary-800);
	}
</style>
