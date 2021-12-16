<script>
    export let name = ""
    export let id
    let power_cmd = "on"

    function sendCommand(checked) {
        let cmd = "off"
        if (checked) {
            cmd = "on"
        }
		fetch(`http://localhost:5000/devices/command?id=${id}`, {
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
    <p>{name}</p>
    <input type="checkbox" on:click={(event) => sendCommand(event.target.checked)}>
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