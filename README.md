
---

#  React + Node Fullstack Task Application

A simple fullstack task manager application built with React (Vite) for the frontend and Node.js (Express) for the backend. This project was developed as part of a college course.

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vitorNicoletti/ReactNodeProject.git
cd ReactNodeProject
```

---

## 🖥️ Frontend Setup

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Run the Frontend

```bash
npm run dev
```

The frontend will be available at: [http://localhost:5173](http://localhost:5173) (or the port assigned by Vite).

---

##  Backend Setup

### 4. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 5. Configure MySQL Database

- Make sure MySQL is installed and running.
- Create a database named `tarefas` using the database exported 
- Open `db.js` and update the database connection settings (user, password, host, etc.) according to your local MySQL configuration.

### 6. Run the Backend

```bash
npm start
```

The backend will be running at: [http://localhost:3000](http://localhost:3000) (or the port you configured).

