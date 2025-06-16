import { nanoid } from "nanoid";
import URL from "../model/url.js";

export async function handleGenerateNewShortURL(req, res) {
    const url = req.body.url;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }
  
    const shortId = nanoid(8);
    await URL.create({ shortId, redirectURL: url, clicks: 0 });

    const shortURL = `http://localhost:8001/${shortId}`;

 res.json({ 
    shortId, 
    shortURL: shortId,
    redirectURL: url, 
    clicks: 0 
});


}
