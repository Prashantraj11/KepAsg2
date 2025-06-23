# 🚀 My API Server

A lightweight full-stack application that demonstrates how to **design**, **document**, and **test** custom REST APIs with ease.

---

## ⚙️ Tech Stack

| Layer     | Technology    |
| --------- | ------------- |
| Runtime   | Node.js (LTS) |
| Framework | Express       |
| Database  | SQLite        |
| DB Driver | `sqlite3`     |
| Dev Tool  | `nodemon`     |
| Front-end | HTML, CSS, JS |

---

## ✨ Features

* ✅ **CRUD API** – Fully documented RESTful endpoints: `/api/items`
* ✅ **Zero-config SQLite** – Lightweight and file-based DB: `app.db`
* ✅ **Minimal Front-end** – Responsive single-page app with Fetch API
* ✅ **CORS Enabled** – Compatible with local front-end, Postman, or `cURL`
* ✅ **Auto-reload** – Development made easy with `nodemon`

---

## 📁 Project Structure

```
my-api-server/
├── init_db.js         # Bootstrap script to initialize SQLite DB
├── index.js           # Main Express server entry point
├── .env.example       # Template for environment variables
├── public/            # Front-end static files (index.html)
├── package.json       # Project dependencies and scripts
└── .gitignore         # Files and folders to ignore in Git
```

---

## ⚡ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-user/my-api-server.git
cd my-api-server

# Install dependencies
npm install

# Initialize the database
node init_db.js

# Start the server with auto-reload (nodemon)
npm run dev
```

➡️ Visit your app: [http://localhost:4000](http://localhost:4000)

---

## 🌐 Environment Variables

| Variable | Default | Description           |
| -------- | ------- | --------------------- |
| `PORT`   | `4000`  | Server listening port |

---

## 🗃️ Database Schema

```sql
CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📡 API Endpoints

| Method | Route            | Description       | Body (JSON)                         | Status |
| ------ | ---------------- | ----------------- | ----------------------------------- | ------ |
| GET    | `/api/items`     | List all items    | –                                   | 200    |
| GET    | `/api/items/:id` | Get a single item | –                                   | 200    |
| POST   | `/api/items`     | Create new item   | `{ "name": "", "description": "" }` | 201    |
| PUT    | `/api/items/:id` | Update existing   | `{ "name": "", "description": "" }` | 200    |
| DELETE | `/api/items/:id` | Delete an item    | –                                   | 200    |

---

## 🖥️ Front-end

Access the front-end at: [http://localhost:4000](http://localhost:4000)

A clean and simple static HTML page utilizing Fetch API for seamless interaction with the backend.

---

## 📬 Example Usage with `cURL`

```bash
# Create a new item
curl -X POST http://localhost:4000/api/items \
     -H "Content-Type: application/json" \
     -d '{"name": "First", "description": "Hello"}'

# Get all items
curl http://localhost:4000/api/items

# Update item with ID 1
curl -X PUT http://localhost:4000/api/items/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Updated", "description": "World"}'

# Delete item with ID 1
curl -X DELETE http://localhost:4000/api/items/1
```

---
