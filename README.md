# 🌟 Volunteer Registration System

A modern full-stack web application that connects passionate volunteers with meaningful opportunities in their community. Built with a powerful Node.js backend and a stunning React.js frontend.

![Volunteer Registration System](./frontend/public/hero-image.avif)

---

## ✨ Features

### 👤 For Volunteers
- **Register** with full profile: name, email, phone, city, skills & availability
- **Secure Login** with JWT authentication
- **Personal Dashboard** to view your profile with stats cards
- **Skill Tags** displayed beautifully on your profile

### 🛡️ For Admins
- **Admin Dashboard** with a full volunteer table
- **Search** volunteers by name, email, or skills in real-time
- **Delete** volunteers from the system
- **Export to CSV** all volunteer data with a single click

### 🎨 Design
- Glassmorphism UI with animated floating blobs
- Royal Blue, Emerald Green & Amber color palette
- Inter font for premium typography
- Fully responsive for all screen sizes
- Smooth hover animations & micro-interactions

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API Server |
| **MongoDB + Mongoose** | Database |
| **bcryptjs** | Password Hashing |
| **JSON Web Token (JWT)** | Authentication |
| **express-validator** | Input Validation |
| **cors + dotenv** | Middleware & Config |

### Frontend
| Technology | Purpose |
|---|---|
| **React.js (Vite)** | UI Framework |
| **React Router DOM** | Client-side Routing |
| **Tailwind CSS v4** | Styling |
| **Axios** | API Requests |
| **React Hook Form** | Form Handling |
| **React Hot Toast** | Notifications |

---

## 📁 Project Structure

```
volunteer-registration-system/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Register, Login, Get Me
│   │   └── volunteerController.js # CRUD for volunteers
│   ├── middleware/
│   │   ├── auth.js             # JWT protect middleware
│   │   └── admin.js            # Admin role check
│   ├── models/
│   │   └── User.js             # Mongoose User schema
│   ├── routes/
│   │   ├── auth.js             # /api/auth routes
│   │   └── volunteers.js       # /api/volunteers routes
│   ├── .env                    # Environment variables (not committed)
│   └── server.js               # Main entry point
│
└── frontend/
    ├── public/
    │   └── hero-image.avif     # Hero section image
    └── src/
        ├── api/
        │   └── axios.js        # Axios instance with interceptors
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── VolunteerForm.jsx
        │   ├── VolunteerList.jsx
        │   ├── ProtectedRoute.jsx
        │   └── AdminRoute.jsx
        ├── context/
        │   └── AuthContext.jsx  # Global auth state
        ├── pages/
        │   ├── Home.jsx
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   ├── Dashboard.jsx
        │   └── AdminDashboard.jsx
        └── App.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/NailaKhani/volunteer-registration-system.git
cd volunteer-registration-system
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:
```bash
node server.js
```
✅ You should see: `MongoDB Connected: ...`

### 3. Setup the Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 📡 API Endpoints

### Auth Routes (`/api/auth`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/register` | Public | Register a new volunteer |
| POST | `/login` | Public | Login and get JWT token |
| GET | `/me` | Private | Get current user profile |

### Volunteer Routes (`/api/volunteers`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/` | Admin | Get all volunteers |
| DELETE | `/:id` | Admin | Delete a volunteer |
| GET | `/export` | Admin | Export all volunteers as CSV |

---

## 🔑 Admin Access

By default, all registered users have the `volunteer` role. To grant admin access:
1. Go to your **MongoDB Atlas** dashboard
2. Browse the `users` collection
3. Find your user and change the `role` field from `"volunteer"` to `"admin"`
4. Log back in — you will now see the Admin Dashboard!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [NailaKhani](https://github.com/NailaKhani)
