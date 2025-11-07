from pydantic import BaseModel, EmailStr
from typing import Optional, List

# ---------- User ----------
class User(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str = "customer"

# ---------- Login ----------
class LoginModel(BaseModel):
    email: str
    password: str

# ---------- Product ----------
class Product(BaseModel):
    name: str
    description: str
    price: float
    image: str
    stock: int

# ---------- Cart ----------
class CartItem(BaseModel):
    product_id: str
    quantity: int

class Cart(BaseModel):
    user_id: str
    items: List[CartItem]

# ---------- Order ----------
class Order(BaseModel):
    user_id: str
    items: List[CartItem]
    total_amount: float
