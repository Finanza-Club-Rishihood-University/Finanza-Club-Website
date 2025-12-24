import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Members from "./pages/Members/Members";
import Documents from "./pages/Documents/Documents";
import AllNewsletters from "./pages/Documents/AllNewsletters";
import AllNotes from "./pages/Documents/AllNotes";

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
          <Route path="/documents/newsletters" element={<AllNewsletters />} />
          <Route path="/documents/notes" element={<AllNotes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}