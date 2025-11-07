"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/users", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: "customer",
        verified: true,
      });
      alert("Signup successful!");
      router.push("/login");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <form className="space-y-4 w-80" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Create Account</button>
      </form>
    </div>
  );
}
