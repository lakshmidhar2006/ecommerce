import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🛍️ My E-Commerce Store</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
