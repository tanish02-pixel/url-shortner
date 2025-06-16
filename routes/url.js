import express from "express";
import URL from "../model/url.js";
import { handleGenerateNewShortURL } from "../controller/url.js";

const router = express.Router();


// Route to shorten a new URL
router.post("/", handleGenerateNewShortURL);



// Export router to use it in main file
export default router;
