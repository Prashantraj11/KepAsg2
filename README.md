🚀 My-API-Server
A lightweight full-stack app showcasing how to design, document, and test custom REST APIs.

⚙️ Back-end: Node.js + Express + SQLite

🎨 Front-end: Single static HTML file using Fetch API

✨ Features
✅ Fully-documented CRUD API: /api/items

✅ Zero-config SQLite database (app.db)

✅ Minimal, responsive front-end

✅ CORS enabled — works with local front-end, Postman, or cURL

✅ Nodemon for automatic reloads during development

🛠️ Tech Stack
Layer	Technology
Runtime	Node.js (LTS)
Framework	Express
Database	SQLite
ORM/Driver	sqlite3
Dev Tool	Nodemon
Front-end	HTML, CSS, JS

📁 Project Structure
pgsql
Copy
Edit
my-api-server/
├── init_db.js         # Bootstrap SQLite DB
├── index.js           # Express entry point
├── .env.example       # Environment variables template
├── public/            # Front-end (index.html)
├── package.json
└── .gitignore
⚡ Getting Started
bash
Copy
Edit
git clone https://github.com/your-user/my-api-server.git
cd my-api-server
npm install
node init_db.js   # Initialize database
npm run dev       # Start server with nodemon
Visit 👉 http://localhost:4000

🌐 Environment Variables
Variable	Default	Description
PORT	4000	Server listening port

🗃️ Database Schema
sql
Copy
Edit
CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
📡 API Endpoints
Method	Route	Description	Body (JSON)	Status
GET	/api/items	List all items	–	200
GET	/api/items/:id	Get single item	–	200
POST	/api/items	Create item	{ "name": "", "description": ""}	201
PUT	/api/items/:id	Update item	{ "name": "", "description": ""}	200
DELETE	/api/items/:id	Delete item	–	200

🖥️ Front-end
Access the static front-end at:
👉 http://localhost:4000/

📬 Example Usage (cURL)
bash
Copy
Edit
# Create
curl -X POST http://localhost:4000/api/items \
     -H "Content-Type: application/json" \
     -d '{"name":"First","description":"Hello"}'

# Read all
curl http://localhost:4000/api/items

# Update
curl -X PUT http://localhost:4000/api/items/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"Updated","description":"World"}'

# Delete
curl -X DELETE http://localhost:4000/api/items/1
✅ Tests
Quick manual tests can be performed with cURL or Postman.
For automated testing, integrate Mocha & Chai, or use Postman Collection Runner.
