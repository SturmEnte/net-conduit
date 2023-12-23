import TestServer from "./testServer";

const START_PORT = 4000;
const STEPS = 1000;
const SERVER_AMOUNT = 3;

let servers: TestServer[] = [];

for (let i = 0; i < SERVER_AMOUNT; i++) {
	let server = new TestServer(START_PORT + STEPS * i, i + 1);
	server.start();
	servers.push(server);
}
