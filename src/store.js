import { writable } from 'svelte/store';

const messageStore = writable('');

const socket = new WebSocket(`ws://${APIHOST}:5000/ws`);

// Connection opened
socket.addEventListener('open', function (event) {
    console.log("It's open");
});

socket.addEventListener('close', function (event) {
    console.log("It's closed");
});

// Listen for messages
socket.addEventListener('message', function (event) {
    messageStore.set(JSON.parse(event.data));
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
	}
}

export default {
	subscribe: messageStore.subscribe,
	sendMessage
}