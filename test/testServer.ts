import express from "express";

class TestServer {
	id;
	port;
	app: express.Application;

	constructor(port: Number, id: Number) {
		this.id = id;
		this.port = port;

		this.app = express();

		this.app.get("/", (req, res) => {
			res.json([id, "get"]);
		});

		this.app.post("/", (req, res) => {
			res.json([id, "post"]);
		});

		this.app.delete("/", (req, res) => {
			res.json([id, "delete"]);
		});
	}

	start() {
		this.app.listen(this.port, () => {
			console.log(`Test server ${this.id} is listening to port ${this.port}`);
		});
	}
}

export default TestServer;
