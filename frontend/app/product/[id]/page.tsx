"use client";
import { products } from "../../../data/products";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-2">₹{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        <div className="mt-4">
          <Link href="/cart" className="text-blue-600">Go to Cart →</Link>
        </div>
      </div>
    </div>
  );
}
