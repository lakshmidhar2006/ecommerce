# 🛍️ FastAPI E-Commerce Backend

A scalable and production-ready **FastAPI + MongoDB backend** for a full-stack e-commerce application.  
It provides APIs for authentication, product management, cart operations, and orders, designed to integrate seamlessly with a **Next.js frontend**.

---

## 🚀 Features

✅ **JWT Authentication (Signup/Login)**  
✅ **MongoDB (via Motor)**  
✅ **Product CRUD APIs**  
✅ **Cart & Order management**  
✅ **CORS enabled** for frontend integration  
✅ **Clean modular structure (routes/models/database)**  
✅ **Deployable on Render (free tier)**  

---

## 🧠 Tech Stack

| Component | Technology |
|------------|-------------|
| Backend Framework | **FastAPI** |
| Database | **MongoDB Atlas** |
| Async Driver | **Motor** |
| Authentication | **JWT (python-jose)** |
| Password Hashing | **Passlib (bcrypt)** |
| Deployment | **Render / Railway** |
| Config | **dotenv (.env)** |

---

## 🏗️ Project Structure

ecommerce-backend/
├── main.py
├── database.py
├── models.py
├── routes/
│ ├── auth.py
│ ├── products.py
│ ├── cart.py
│ └── orders.py
├── requirements.txt
└── .env

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/ecommerce-backend.git
cd ecommerce-backend
2️⃣ Create a virtual environment
bash
Copy code
python -m venv venv
# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
3️⃣ Install dependencies
bash
Copy code
pip install -r requirements.txt
4️⃣ Configure Environment Variables
Create a .env file in your root directory and add:

ini
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce_db
SECRET_KEY=myjwtsecretkey
ALGORITHM=HS256
5️⃣ Run the development server
bash
Copy code
python -m uvicorn main:app --reload
Server runs at 👉 http://127.0.0.1:8000

🧩 API Endpoints Overview
🔐 Authentication
Method	Endpoint	Description
POST	/auth/signup	Create a new user
POST	/auth/login	Authenticate and return JWT token

🛍️ Products
Method	Endpoint	Description
POST	/products	Add a new product
GET	/products	Get all products
GET	/products/{id}	Get single product
DELETE	/products/{id}	Delete a product

🛒 Cart
Method	Endpoint	Description
POST	/cart	Add/update items in cart
GET	/cart/{user_id}	Get user’s cart

📦 Orders
Method	Endpoint	Description
POST	/orders	Place an order
GET	/orders/{user_id}	Get order history for a user

🧾 Example Requests
Signup Example

bash
Copy code
POST /auth/signup
{
  "name": "Lakshmidhar",
  "email": "lakshmidhar@example.com",
  "password": "secret123"
}
Login Example

bash
Copy code
POST /auth/login
{
  "email": "lakshmidhar@example.com",
  "password": "secret123"
}
Add Product

bash
Copy code
POST /products
{
  "name": "Smart Watch",
  "description": "Track your fitness and heart rate",
  "price": 2499,
  "image": "/watch.jpg",
  "stock": 20
}
🧪 Testing (Swagger UI)
After running the server, open your browser:
👉 http://127.0.0.1:8000/docs

Use the interactive interface to test your API endpoints.