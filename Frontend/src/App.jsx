import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

import Home from "./pages/Home/Home";
import About from "./pages/about";
import Events from "./pages/events";
import Members from "./pages/members";
import Newsletters from "./pages/newsletters";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="grow">
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