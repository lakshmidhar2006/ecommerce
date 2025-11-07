import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <Image src={product.image} alt={product.name} width={400} height={400} className="rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">₹{product.price}</p>
      <div className="flex gap-3 mt-2">
        <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
        <Link href={`/product/${product.id}`} className="text-blue-600 underline">View</Link>
      </div>
    </div>
  );
}
