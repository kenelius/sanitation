import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useauth";


export default function Login() {
const { login } = useAuth();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
login(email, password);
};


return (
<div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-bold text-green-700 mb-4">Login</h2>
<form className="grid gap-3" onSubmit={handleSubmit}>
<input
type="email"
placeholder="Email"
className="border p-2 rounded"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<input
type="password"
placeholder="Password"
className="border p-2 rounded"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button className="bg-green-600 hover:bg-green-700 text-white w-full p-2 rounded">
Login
</button>
</form>
</div>
);
}