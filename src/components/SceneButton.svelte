<script>
    export let scene

    function setScene() {
        console.log(scene.Id)
        console.log(`http://${APIHOST}:5000/scenes?id=${scene.Id}`)
		fetch(`http://${APIHOST}:5000/scenes?id=${scene.Id}`, {
            method: 'POST'
        })
	}
</script>

<button class="scene-btn" on:click={setScene}>{scene.Name}</button>

<style>
    .scene-btn {
		border: 1px solid black;
        border-radius: 5px;
		margin: 5px;
		width: 125px;
		min-width: 125px;
		height: 50px;
	}

    @media (max-width: 640px) {

    }
</style>