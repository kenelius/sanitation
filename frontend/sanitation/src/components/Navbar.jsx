import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="bg-green-600 fixed top-0 left-0 w-full shadow z-50 px-6 py-3 flex justify-between items-center text-white">
<h1 className="text-xl font-bold">CleanCity</h1>
<div className="flex gap-4 text-sm font-semibold">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
<Link to="/login">Login</Link>
</div>
</nav>
);
}