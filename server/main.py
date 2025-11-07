from fastapi import FastAPI
from routes import auth, products, cart, orders
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="E-Commerce FastAPI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend requests
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(auth.router)
app.include_router(products.router)
app.include_router(cart.router)
app.include_router(orders.router)

@app.get("/")
async def home():
    return {"message": "Welcome to E-Commerce API"}
