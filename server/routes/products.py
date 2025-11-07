from fastapi import APIRouter, HTTPException
from models import Product
from database import db
from bson import ObjectId

router = APIRouter(prefix="/products", tags=["Products"])

# ---------- Add Product ----------
@router.post("/")
async def add_product(product: Product):
    product_dict = product.dict()
    result = await db.products.insert_one(product_dict)
    return {"message": "Product added", "id": str(result.inserted_id)}

# ---------- Get All Products ----------
@router.get("/")
async def get_products():
    products = await db.products.find().to_list(100)
    for p in products:
        p["_id"] = str(p["_id"])
    return products

# ---------- Get Product by ID ----------
@router.get("/{product_id}")
async def get_product(product_id: str):
    product = await db.products.find_one({"_id": ObjectId(product_id)})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    product["_id"] = str(product["_id"])
    return product

# ---------- Delete Product ----------
@router.delete("/{product_id}")
async def delete_product(product_id: str):
    result = await db.products.delete_one({"_id": ObjectId(product_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted"}
