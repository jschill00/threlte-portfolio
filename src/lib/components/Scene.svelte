<script lang="ts">
	import { T, useThrelte, useRender } from '@threlte/core';
	import { ContactShadows, Environment, Float, Grid, OrbitControls } from '@threlte/extras';
	import TitleScene from './models/TitleScene.svelte';
	import Stars from './models/Stars.svelte';

	import { clamp } from 'three/src/math/MathUtils';

	const START_ZOOM = 1300;
	const END_ZOOM = 950;
	const MAX_ZOOM = 80;
	const MAX_FADE = 100;

	let screenSize: number;
	let zoomAmount = 40;
	let zoomGridFadeAmount = 60;
	let extraStars = false;


	$: {
		if (screenSize < START_ZOOM) {
			const zoomFactor =
				clamp(END_ZOOM - (END_ZOOM + (screenSize - START_ZOOM)), 0, END_ZOOM) / END_ZOOM;
			const adjustedFactor = (() => {
				if (zoomFactor < 0.7) {
					return zoomFactor / 2;
				} else {
					return zoomFactor;
				}
			})();
			zoomAmount = 40 + MAX_ZOOM * adjustedFactor;
			zoomGridFadeAmount = 60 + MAX_FADE * adjustedFactor;
			extraStars = true;
		} else {
			zoomAmount = 40;
			zoomGridFadeAmount = 60;
			extraStars = false;
		}
	}

	const {} = useThrelte();
</script>

<svelte:window bind:innerWidth={screenSize} />

<T.Scene color="" />
<T.PerspectiveCamera makeDefault position={[-10, -10, zoomAmount]} fov={10}>
	<OrbitControls
		enableZoom={false}
		enableDamping
		autoRotateSpeed={0.5}
		target.y={2.1}
		target.z={-0.75}
		enablePan={false}
		maxPolarAngle={Math.PI / 2}
	/>
</T.PerspectiveCamera>

<Environment
	path="/envmap/hdr/"
	format="hdr"
	isBackground={false}
	files="dresden_station_night_2k.hdr"
/>

<!-- <T.DirectionalLight intensity={1.0} position={[1, -1, 4]} color={'#4113be'} castShadow /> -->

<Grid
	position.y={-0.001}
	sectionColor="#ddf542"
	cellColor="#ddf542"
	sectionThickness={0}
	cellThickness={1.5}
	fadeDistance={zoomGridFadeAmount}
	infiniteGrid={true}
	cellSize={4}
/>

<ContactShadows scale={15} blur={2} far={2.5} opacity={0.6} />

<Float floatIntensity={0.5} speed={4}>
	<TitleScene position={[0, 2, 0]} scale={0.75} />
</Float>
<Stars position={[0, 1.1, 0]} />
<Stars position={[0, 2.2, 0]} scale={2} rotation={[0, Math.PI / 2, 0]} visible={extraStars} />
