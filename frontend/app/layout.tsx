import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "E-Commerce Store",
  description: "Next.js E-Commerce App with FastAPI backend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto p-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
