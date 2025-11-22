import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Members from "./pages/Members/Members";
import Documents from "./pages/Documents/Documents";

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
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}