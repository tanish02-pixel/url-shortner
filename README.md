# 🔗 URL Shortener

A simple and lightweight URL Shortener built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to generate short links and track analytics (click counts) for each short URL.

---

## 🚀 Features

- ✂️ Shorten any valid URL
- 📈 View click analytics for each short link
- 💾 MongoDB integration for storage
- 🖥️ EJS template engine to render UI
- 🧱 Modular MVC structure (Models, Routes, Controllers)

---

## 🧠 Tech Stack

- ⚙️ **Backend:** Node.js, Express.js
- 🗃️ **Database:** MongoDB + Mongoose
- 🖼️ **Templating Engine:** EJS
- 🆔 **Utility:** `nanoid` for generating short IDs

---

## 📁 Folder Structure


/short-url
│
├── model/
│ └── url.js # Mongoose schema/model
│
├── routes/
│ └── url.js # API route for shortening
│
├── controller/
│ └── url.js # URL logic controller
│
├── views/
│ └── home.ejs # EJS frontend page
│
├── connect.js # MongoDB connection logic
├── index.js # Main server file
└── README.md # You're here!


---

## 🛠️ Getting Started

### 1️⃣ Clone the Repo


git clone https://github.com/tanish02-pixel/url-shortner.git
cd url-shortner
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Setup MongoDB
Make sure MongoDB is running locally or remotely (e.g., MongoDB Atlas).
Edit this line in index.js to point to your Mongo URI:

js
Copy
Edit
await connectDB("your-mongodb-uri-here");
4️⃣ Start the Server
bash
Copy
Edit
npm start
Now the app will run on:
🌐 http://localhost:8001

🌐 API Endpoints
Method	Route	Description
POST	/url	🔗 Create a short URL
GET	/analytics/:shortId	📈 Get click analytics
GET	/:shortId	🚀 Redirect to original URL
GET	/	🖥️ View form & URL list (EJS)

🚀 Deployment
🆓 Free Hosting Options
⚙️ Render – great for full Express apps

🌐 Vercel – ideal for frontend/static/serverless (backend requires tweaks)

✅ Deployment Steps
Push your project to GitHub:

bash
Copy
Edit
git add .
git commit -m "Initial commit"
git push origin main
Go to Render or Vercel

Connect your GitHub repo

Set up environment variables if needed

Click "Deploy" 🚀

🌍 Custom Domain
You can add your own domain (e.g., short.tanish.me) via:

🔧 Render Dashboard → Settings → Custom Domain

🌐 Vercel Dashboard → Domains

📸 Screenshots (Optional)
Add these to a /screenshots/ folder and show how the UI/API looks

bash
Copy
Edit
📷 ./screenshots/home.png
📷 ./screenshots/analytics.png
📝 License
This project is licensed under the MIT License.

👨‍💻 Author
Tanish Singh
🔗 GitHub Profile »
