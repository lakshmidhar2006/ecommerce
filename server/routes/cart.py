from fastapi import APIRouter, HTTPException
from database import db
from models import Cart

router = APIRouter(prefix="/cart", tags=["Cart"])

# ---------- Add Item to Cart ----------
@router.post("/")
async def add_to_cart(cart: Cart):
    await db.cart.update_one(
        {"user_id": cart.user_id},
        {"$set": {"items": [i.dict() for i in cart.items]}},
        upsert=True
    )
    return {"message": "Cart updated"}

# ---------- Get Cart ----------
@router.get("/{user_id}")
async def get_cart(user_id: str):
    cart = await db.cart.find_one({"user_id": user_id})
    if not cart:
        return {"items": []}
    return cart
