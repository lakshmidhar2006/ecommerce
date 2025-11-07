"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/auth/login", form);
      localStorage.setItem("token", data.access_token);
      const user: any = jwtDecode(data.access_token);
      alert(`Welcome ${user.name}`);
      router.push("/");
    } catch {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="space-y-4 w-80" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}
