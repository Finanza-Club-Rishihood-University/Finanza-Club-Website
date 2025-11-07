import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Events from "./pages/events";
import Members from "./pages/members";
import Newsletters from "./pages/newsletters";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/newsletters" element={<Newsletters />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}