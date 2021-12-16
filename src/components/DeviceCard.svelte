<script>
    export let device
    let power_cmd = "on"

    function sendCommand(checked) {
        let cmd = "off"
        if (checked) {
            cmd = "on"
        }
		fetch(`http://localhost:5000/devices/command?id=${device.Id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "power": cmd
            })
        })
	}
</script>

<div class="device">
    <p>{device.Name}</p>
    {#if device.State.power }
    <input type="checkbox" checked on:click={(event) => sendCommand(event.target.checked)}>
    {:else}
    <input type="checkbox" on:click={(event) => sendCommand(event.target.checked)}>
    {/if}
</div>

<style>
    .device {
		border: 1px solid black;
		margin: 5px;
		width: 125px;
		min-width: 125px;
		height: 150px;
	}

	.device input {
		height: 25px;
		width: 25px;
	}

    @media (max-width: 640px) {

        .device {
            height: 125px;
        }
    }
</style>