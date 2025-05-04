# AI-Based Recommendation/Prediction Website

This is a full-stack web application that allows users to receive AI-based recommendations, predictions, or classifications. It uses:

- **React** for the frontend
- **Node.js (Express)** for the backend server and API
- **Python (Flask)** for running the ML model
- **PostgreSQL** for database management
- **Axios** for frontend-backend communication

---

## 🧠 Features

- User input interface for predictions or recommendations
- Real-time prediction using a pre-trained ML model (`model.pkl`)
- Data stored in PostgreSQL
- Full-stack deployment with integrated frontend and backend

---

## 📁 Project Structure

AI-Website/
├── frontend/ # React app
│ ├── public/
│ ├── src/
│ └── package.json
├── backend/ # Node.js backend
│ ├── build/ # React build folder (copied from frontend/build)
│ ├── server.js
│ └── package.json
├── ml-model/ # Python ML model server
│ ├── model.py
│ ├── model.pkl
│ └── requirements.txt
├── README.md
└── .env


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Website.git
cd AI-Website

##2. Frontend Setup (React)

cd frontend
npm install
npm run build

##3. Backend Setup (Node.js)


cd ../backend
npm install

##4. Python ML Server Setup (Flask)


cd ../ml-model
python -m venv .venv
.venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python model.py         # This starts Flask server on port 6000
Make sure your model.pkl file is in the ml-model folder

🗄️ PostgreSQL Setup
Install PostgreSQL

Open psql and create database:

CREATE DATABASE mydb;
\c mydb
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
🚀 Deploying to Render
Push the project to GitHub

Go to Render.com

Create a Web Service

Choose backend/ as root

Build Command: npm install

Start Command: node server.js

Add environment variables if needed

📡 API & Communication
Frontend uses Axios to send data to:

http://localhost:3000/api/... (Node.js server)

Backend fetches predictions from:

http://localhost:6000/predict (Flask server)

🛠 Technologies Used
React.js

Node.js (Express)

Python (Flask + Joblib)

PostgreSQL

Axios

Render (deployment)

🧪 Example Prediction Flow
User enters input on React form

React sends request to Node backend (/api/predict)

Node forwards request to Python ML server

Python returns prediction

Node sends result back to frontend

📞 Contact
Feel free to reach out if you have any questions or suggestions!

Author: Your Name
Email: salamatmir159@gmail.com



---

Would you like a downloadable version of this README, or should I help you fill in specific details