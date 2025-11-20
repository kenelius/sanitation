import { useAuth } from "../hooks/useauth";
import React from "react";



export default function dashboard() {
const { user } = useAuth();


return (
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-bold text-green-700 mb-4">Dashboard</h2>
<p>Welcome, {user ? user.email : "Guest"}!</p>
</div>
);
}


