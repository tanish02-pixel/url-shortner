import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./connect.js";
import URL from "./model/url.js";
import urlRouter from "./routes/url.js";
import path from "path";
 
// 1️⃣ connect to your database first
await connectDB(process.env.MONGO_URL)
  .then(() => console.log('MONGODB CONNECTED'))
  .catch((err) => console.log('MongoDB connection error:', err));


const app = express();
const PORT = 8001;

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

// Show form and list
app.get("/", async (req, res) => {
  const urls = await URL.find({});
  res.render("home", { urls });
});


// 2️⃣ parse incoming json
app.use(express.json());  
app.use(express.urlencoded({ extended: true }))

// 3️⃣ use router for "/url" path
app.use("/url", urlRouter);



// first put this (more specific) route
app.get("/analytics/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const urlEntry = await URL.findOne({ shortId });

    if (urlEntry) {
        res.json({ shortId, clicks: urlEntry.clicks });
    } else {
        res.status(404).json({ error: "URL not found" });
    }
});

// then put this (more general) route afterwards
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const urlEntry = await URL.findOne({ shortId });

    if (urlEntry) {
        urlEntry.clicks += 1;
        await urlEntry.save();
        res.redirect(urlEntry.redirectURL);
    } else {
        res.status(404).json({ error: "URL not found" });
    }
});


// 4️⃣ start server
app.listen(PORT, () => console.log(`Server Started At Port: ${PORT}`)); 