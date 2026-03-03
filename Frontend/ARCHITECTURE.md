# RideX - Cab Booking Platform Architecture

## Overview
RideX is a modern cab-booking platform designed to connect users with captains (drivers) for seamless transportation. The system is built using a decoupled architecture with a React-based frontend and a Node.js/Express backend.

---

## 🏗 System Architecture

### 1. Frontend Layer
The frontend is a Single Page Application (SPA) built for speed and responsiveness.

- **Framework**: [React.js](https://react.dev/) (Vite-powered)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first responsive design.
- **Routing**: [React Router DOM](https://reactrouter.com/) for client-side navigation.
- **Key Pages**:
    - `Home`: Landing page for the application.
    - `User Login/Signup`: Authentication for passengers.
    - `Captain Login/Signup`: Dedicated authentication for drivers.

### 2. Backend Layer
The backend follows a modular structure to handle business logic, data persistence, and authentication.

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) ODM.
- **Authentication**:
    - **JWT (JSON Web Tokens)**: Used for secure, stateless session management.
    - **Bcrypt**: Used for hashing and salting passwords.
- **Pattern**: MVC-like structure (Models, Controllers, Routes).

### 3. Data Models
Currently implemented models:
- **User**: Stores information about passengers (Name, Email, Password, etc.).
- *(Planned)* **Captain**: Will store driver-specific details including vehicle info.

---

## 📂 Project Structure

```text
RideX/
├── Frontend/               # React Application
│   ├── src/
│   │   ├── pages/          # Individual screen components
│   │   ├── assets/         # Static images and icons
│   │   ├── App.jsx         # Main routing and layout
│   │   └── main.jsx        # Entry point
│   └── ARCHITECTURE.md     # System documentation
├── Backend/                # Express Server
│   ├── models/             # Mongoose schemas
│   ├── controllers/        # Business logic for routes
│   ├── routes/             # API endpoint definitions
│   ├── db/                 # Database connection logic
│   ├── app.js              # Express app configuration
│   └── server.js           # Server entry point and HTTP setup
```

---

## 🔐 Security & Communication
- **API**: RESTful endpoints for frontend-backend communication.
- **CORS**: Enabled to allow secure cross-origin requests between the frontend and backend.
- **Environment Variables**: Managed via `.env` files to protect sensitive keys like `DB_URL` and `JWT_SECRET`.

---

## 🚀 Future Roadmap
- Implementation of **Socket.io** for real-time ride tracking and updates.
- Integration of Map APIs (Google Maps/Mapbox) for location services.
- Payment gateway integration.
- Ride matching algorithms.
