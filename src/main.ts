import "dotenv/config";
import express from "express";

import netConduit from "./net-conduit";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use("/net-conduit", netConduit);

app.all("*", (req, res) => {
	res.send("Default");
});

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
