<script>
	import { onMount } from "svelte";
	import DeviceCard from "./components/DeviceCard.svelte"
	import SceneButton from "./components/SceneButton.svelte"
	let devices = []
	let scenes = []

	function getDevices() {
		console.log(`API: http://${APIHOST}:5000`)
		fetch(`http://${APIHOST}:5000/devices`)
		.then(response => response.json())
		.then(data => {
			devices = data
		}).catch(error => {
			console.log(`API: http://${APIHOST}:5000`)
			console.log(error);
			return [];
		})
	}

	function getScenes() {
		fetch(`http://${APIHOST}:5000/scenes`)
		.then(response => response.json())
		.then(data => {
			scenes = data
		}).catch(error => {
			console.log(`API: http://${APIHOST}:5000`)
			console.log(error);
			return [];
		})
	}

	onMount(() => {
		getDevices()
		getScenes() 
	})

</script>

<main>
	<h1>Dashboard</h1>
	<div class="container">
		{#each scenes as scene}
			<SceneButton scene={scene}/>
		{/each}
	</div>
	
	<div class="container">
		{#each devices as device}
			<DeviceCard device={device}/>
		{/each}
	</div>
</main>

<style>

	main {
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container {
		width: 60vw;
		margin: 10px auto 10px auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 640px) {

		.container { 
			width: 100vw;
		}

	}
</style>