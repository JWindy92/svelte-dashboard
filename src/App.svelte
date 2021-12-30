<script>
	import { onMount } from "svelte";
	import store from "./store"
	import SceneButton from "./components/SceneButton.svelte"
	import DeviceCard from "./components/DeviceCard.svelte"
	let device_pool = []
	$: devices = device_pool
	let scenes = []
	
	onMount(() => {
		store.subscribe(currentMessage => {
			updateDevices(currentMessage)
		})
	})

	function updateDevices(msg) {
		devices.forEach((dev, idx) => {
			if (dev["Id"] == msg["Id"]) {
				devices[idx] = msg
			}
		})
		
	}

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
	<!-- TODO: These classnames suck, change them -->
	<div class="dashboard">
		<h1>Dashboard</h1>
		<div class="container">
			{#each scenes as scene}
				<SceneButton scene={scene}/>
			{/each}
		</div>
		
		<div class="container">
			{#each devices as device}
				<DeviceCard bind:device={device}/>
			{/each}
		</div>
	</div>
	
</main>

<style>

	main {
		text-align: center;
	}

	.dashboard {
		/* border: 1px solid black; */
		height: 100vh;
		width: 70vw;
		margin: auto;
		padding: 50px 0 0 0;
		box-shadow: 0px 0px 10px #ddd;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
		padding-bottom: 50px;
		border-bottom: 1px solid #ddd;
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

		.dashboard {
			width: 100vw;
		}

	}
</style>