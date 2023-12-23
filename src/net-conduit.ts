import { Router } from "express";

const router = Router();

router.all("*", (req, res) => {
	res.send("Net conduit");
});

export default router;
