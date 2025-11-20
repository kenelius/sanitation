import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";


export default function App() {
return (
<AuthProvider>
<BrowserRouter>
<Navbar />
<div className="pt-20 pb-20 px-4 min-h-screen">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />
</Routes>
</div>
<Footer />
</BrowserRouter>
</AuthProvider>
);
}
