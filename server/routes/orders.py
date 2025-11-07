from fastapi import APIRouter
from database import db
from models import Order

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.post("/")
async def place_order(order: Order):
    await db.orders.insert_one(order.dict())
    return {"message": "Order placed successfully"}

@router.get("/{user_id}")
async def get_orders(user_id: str):
    orders = await db.orders.find({"user_id": user_id}).to_list(100)
    for o in orders:
        o["_id"] = str(o["_id"])
    return orders
