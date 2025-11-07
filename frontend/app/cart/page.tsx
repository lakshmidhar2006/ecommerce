"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600">Go Shopping</Link></p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-bold">
            Total: ₹{cart.reduce((sum, i) => sum + i.price, 0)}
          </div>
        </div>
      )}
    </div>
  );
}
