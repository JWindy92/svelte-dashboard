<script>
    import ToggleSwitch from "./controls/ToggleSwitch.svelte"
    import store from "../store"

    export let device
    let power_cmd = "on"

    function sendCommand(checked) {
        let cmd = "off"
        if (checked) {
            cmd = "on"
        }
		fetch(`http://${APIHOST}:5000/devices/command?id=${device.Id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "power": cmd
            })
        }).then(res => res.json())
        .then(data => {
            store.sendMessage(JSON.stringify(data))
        })
	}
</script>

<div class="device">
    <p>{device.Name}</p>
    <ToggleSwitch is_checked={device.State.power} action={sendCommand}/>
</div>

<style>
    .device {
		border: 1px solid black;
		margin: 5px;
		width: 125px;
		min-width: 125px;
		height: 150px;
	}

    @media (max-width: 640px) {

        .device {
            height: 125px;
        }
    }
</style>