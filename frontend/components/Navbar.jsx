"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      <Link href="/" className="text-2xl font-bold">🛍️ Store</Link>
      <div className="flex items-center gap-6">
        <Link href="/cart">Cart ({cart.length})</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
}
