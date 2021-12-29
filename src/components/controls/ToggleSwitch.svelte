<script>
    export let is_checked
    export let action;
</script>

<div>
    {#if is_checked}
    <input type="checkbox" checked on:click={(event) => action(event.target.checked)}>
    {:else}
    <input type="checkbox" on:click={(event) => action(event.target.checked)}>
    {/if}
</div>

<style>
    input {
		height: 25px;
		width: 25px;
	}

    @media (max-width: 640px) {

        input {
            height: 40px;
		    width: 40px;
        }
    }
</style>